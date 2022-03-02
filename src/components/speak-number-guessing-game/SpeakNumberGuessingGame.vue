<template>
    <div class="speak-number-guessing-game-wrapper" v-if="resMsg == 'win'">
        <h2>
            Congrats! You have guessed the number! <br /><br />
            It was {{ randomNum }}
        </h2>
        <button class="play-again" id="play-again" @click="restart">
            Play Again
        </button>
    </div>
    <div class="speak-number-guessing-game-wrapper" v-else>
        <img src="@/assets/speak-number-guessing-game/mic.png" alt="Speak" />

        <h1>Guess a Number Between 1 - 100</h1>

        <h3>Speak the number into your microphone</h3>

        <div id="msg" class="msg" v-if="msg">
            <div>You said:</div>
            <span class="box">{{ msg }}</span>
            <div>
                {{ resMsg }}
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

const getRandomNumber = () => {
    return Math.floor(Math.random() * 100) + 1;
};

export default defineComponent({
    name: 'Speak Number Guessing Games',
    setup(props, { attrs, slots, emit, expose }) {
        window.SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        const recognition = new window.SpeechRecognition();
        const msg: Ref<string | number> = ref('');
        const resMsg = ref('');
        const randomNum = getRandomNumber();
        const restart = () => {
            resMsg.value = '';
        };
        console.log(randomNum);

        const isNumeric = (str: string): boolean => {
            if (typeof str != 'string') return false; // we only process strings!
            return (
                !Number.isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
                !Number.isNaN(parseFloat(str))
            ); // ...and ensure strings of whitespace fail
        };

        // Start recognition and game
        recognition.start();

        recognition.addEventListener('result', (e: any) => {
            msg.value = e.results[0][0]['transcript'] as string;

            console.log(e.results[0][0]);

            if (!isNumeric(msg.value)) {
                resMsg.value = 'That is not a valid number';
            } else {
                msg.value = parseInt(msg.value);

                if (msg.value < 1 || msg.value > 100) {
                    resMsg.value = 'Number must be between 1 and 100';
                }

                if (msg.value > randomNum) {
                    resMsg.value = 'GO HIGHER';
                } else if (msg.value < randomNum) {
                    resMsg.value = 'GO LOWER';
                } else {
                    resMsg.value = 'win';
                }
            }
        });

        recognition.addEventListener('end', () => {
            if (resMsg.value == 'win') {
                recognition.stop();
            } else {
                recognition.start();
            }
        });

        return {
            recognition,
            msg,
            resMsg,
            randomNum,
            restart,
        };
    },
});
</script>

<style scoped lang="scss">
.speak-number-guessing-game-wrapper {
    background: #2f3542 url('@/assets/speak-number-guessing-game/bg.jpg')
        no-repeat left center/cover;
    color: #fff;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}

h1,
h3 {
    margin-bottom: 0;
}

p {
    line-height: 1.5;
    margin: 0;
}

.play-again {
    padding: 8px 15px;
    border: 0;
    background: #f4f4f4;
    border-radius: 5px;
    margin-top: 10px;
}

.msg {
    font-size: 1.5em;
    margin-top: 40px;
}

.box {
    border: 1px solid #dedede;
    display: inline-block;
    font-size: 30px;
    margin: 20px;
    padding: 10px;
}
</style>
