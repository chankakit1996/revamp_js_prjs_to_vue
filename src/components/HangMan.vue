<template>
    <div class="hang-man-wrapper">
        <h1>Hangman</h1>
        <p>Find the hidden word - Enter a letter</p>
        <div class="game-container">
            <svg height="250" width="200" class="figure-container">
                <!-- Rod -->
                <line x1="60" y1="20" x2="140" y2="20" />
                <line x1="140" y1="20" x2="140" y2="50" />
                <line x1="60" y1="20" x2="60" y2="230" />
                <line x1="20" y1="230" x2="100" y2="230" />

                <!-- Head -->
                <circle cx="140" cy="70" r="20" v-if="wrongCount > 0" />
                <!-- Body -->
                <line
                    x1="140"
                    y1="90"
                    x2="140"
                    y2="150"
                    v-if="wrongCount > 1"
                />
                <!-- Arms -->
                <line
                    x1="140"
                    y1="120"
                    x2="120"
                    y2="100"
                    v-if="wrongCount > 2"
                />
                <line
                    x1="140"
                    y1="120"
                    x2="160"
                    y2="100"
                    v-if="wrongCount > 3"
                />
                <!-- Legs -->
                <line
                    x1="140"
                    y1="150"
                    x2="120"
                    y2="180"
                    v-if="wrongCount > 4"
                />
                <line
                    x1="140"
                    y1="150"
                    x2="160"
                    y2="180"
                    v-if="wrongCount > 5"
                />
            </svg>

            <div class="wrong-letters-container">
                <div id="wrong-letters" v-if="wrongCount > 0">
                    <p>Wrong</p>
                    <span v-for="(letter, index) in wrongWords">
                        {{ letter }}
                    </span>
                </div>
            </div>

            <div class="word" id="word">
                <span class="letter" v-for="(letter, index) in words">
                    {{ guessLetters.includes(letter) ? letter : '' }}
                </span>
            </div>
        </div>

        <!-- Container for final message -->
        <div class="popup-container" id="popup-container" v-if="status">
            <div class="popup">
                <h2 id="final-message">
                    {{ finalMsg }}
                </h2>
                <h3 id="final-message-reveal-word" v-if="status == 'lose'">
                    {{ `... the word was ${words}` }}
                </h3>
                <button id="play-button" @click="reset">Play Again</button>
            </div>
        </div>

        <!-- Notification -->
        <div
            class="notification-container"
            id="notification-container"
            :class="notification ? 'show' : ''"
        >
            <p>You have already entered this letter</p>
        </div>
    </div>
</template>
<script lang="ts">
import {
    computed,
    defineComponent,
    onBeforeUnmount,
    onMounted,
    Ref,
    ref,
} from 'vue';

const getWords = () => {
    // const words = ['application', 'programming', 'interface', 'wizard'];
    const words = ['application'];
    return words[Math.floor(Math.random() * words.length)];
};

const showNotification = (v: Ref<boolean>) => {
    v.value = true;
    console.log(v);
    setTimeout(() => {
        v.value = false;
    }, 20000);
};

export default defineComponent({
    name: 'Hang Man',
    setup(props, { attrs, slots, emit, expose }) {
        const words = ref(getWords());
        const letter = words.value.split('');
        const guessLetters: Ref<string[]> = ref([]);

        const notification = ref(false);

        const correctLetters = computed(() => {
            return guessLetters.value.filter((l) => letter.includes(l));
        });

        const wrongWords = computed(() => {
            return guessLetters.value.filter((l) => !letter.includes(l));
        });
        const wrongCount = computed(() => {
            return wrongWords.value.length;
        });

        const initGame = (e: KeyboardEvent) => {
            if (status.value) return;
            if (e.keyCode < 65 || e.keyCode > 90) return;

            const key = e.key.toLocaleLowerCase();
            if (guessLetters.value.includes(key)) {
                showNotification(notification);
            } else {
                guessLetters.value.push(key);
            }
        };

        const status = computed(() => {
            if (wrongCount.value > 5) {
                return 'lose';
            }
            if (letter.every(l => correctLetters.value.includes(l))) {
                return 'win';
            }
            return '';
        });

        const finalMsg = computed(() => {
            if (status.value == 'win') {
                return 'Congratulations! You won! 😃';
            } else {
                return 'Unfortunately you lost. 😕';
            }
        });

        const reset = () => {
            words.value = getWords()
            guessLetters.value = []
        }

        onMounted(() => {
            window.addEventListener('keydown', initGame);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('keydown', initGame);
        });

        return {
            notification,
            words,
            guessLetters,
            correctLetters,
            wrongWords,
            wrongCount,
            status,
            finalMsg,
            reset
        };
    },
});
</script>

<style scoped lang="scss">
.hang-man-wrapper {
    background-color: #34495e;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    margin: 0;
    overflow: hidden;
    position: relative;
}

h1 {
    margin: 20px 0 0;
}

.game-container {
    padding: 20px 30px;
    position: relative;
    margin: auto;
    height: 350px;
    width: 450px;
}

.figure-container {
    fill: transparent;
    stroke: #fff;
    stroke-width: 4px;
    stroke-linecap: round;
}

.figure-part {
    display: none;
}

.wrong-letters-container {
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    text-align: right;
}

.wrong-letters-container p {
    margin: 0 0 5px;
}

.wrong-letters-container span {
    font-size: 24px;

    &:not(:last-child)::after {
        content: ',';
    }
}

.word {
    display: flex;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
}

.letter {
    border-bottom: 3px solid #2980b9;
    display: inline-flex;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    margin: 0 3px;
    height: 50px;
    width: 20px;
}

.popup-container {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.popup {
    background: #2980b9;
    border-radius: 5px;
    box-shadow: 0 15px 10px 3px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
}

.popup button {
    cursor: pointer;
    background-color: #fff;
    color: #2980b9;
    border: 0;
    margin-top: 20px;
    padding: 12px 20px;
    font-size: 16px;
}

.popup button:active {
    transform: scale(0.98);
}

.popup button:focus {
    outline: 0;
}

.notification-container {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px 10px 0 0;
    padding: 15px 20px;
    position: absolute;
    bottom: -50px;
    transition: transform 0.3s ease-in-out;

    &.show {
        transform: translateY(-50px);
    }
}

.notification-container p {
    margin: 0;
}
</style>
