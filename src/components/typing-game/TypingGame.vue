<template>
    <div class="typing-game-wrapper">
        <button
            id="settings-btn"
            class="settings-btn"
            @click="showSetting = !showSetting"
        >
            <i class="fas fa-cog"></i>
        </button>

        <div id="settings" class="settings" :class="showSetting ? '' : 'hide'">
            <form id="settings-form">
                <div>
                    <label for="difficulty">Difficulty</label>
                    <select
                        id="difficulty"
                        @input="selectDiff"
                        :value="difficulty"
                        v-if="!initGame"
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <select v-else disabled :value="difficulty" id="difficulty">
                        <option :value="difficulty">
                            {{ difficulty }}
                        </option>
                    </select>
                </div>
            </form>
        </div>

        <div class="container">
            <h2>👩‍💻 Speed Typer 👨‍💻</h2>
            <small>Type the following:</small>

            <h1 id="word">
                {{ word }}
            </h1>

            <input
                type="text"
                id="text"
                autocomplete="off"
                placeholder="Type the word here..."
                autofocus
                v-model="inputWord"
                @input="typing"
                @input.once="countTime"
            />

            <p class="time-container">
                Time left:
                <span id="time">{{ time }}s</span>
            </p>

            <p class="score-container">
                Score: <span id="score">{{ score }}</span>
            </p>

            <div
                id="end-game-container"
                class="end-game-container"
                v-show="time <= 0"
            >
                <h1>Time ran out</h1>
                <p>Your final score is {{ score }}</p>
                <button onclick="location.reload()">Reload</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';

function getRandomWord() {
    const words = [
        'sigh',
        'tense',
        'airplane',
        'ball',
        'pies',
        'juice',
        'warlike',
        'bad',
        'north',
        'dependent',
        'steer',
        'silver',
        'highfalutin',
        'superficial',
        'quince',
        'eight',
        'feeble',
        'admit',
        'drag',
        'loving',
    ];
    return words[Math.floor(Math.random() * words.length)];
}

export default defineComponent({
    name: 'Typing Game',
    setup(props, { attrs, slots, emit, expose }) {
        const word = ref(getRandomWord());
        const inputWord = ref('');
        const score = ref(0);
        const initGame = ref(false);
        const difficulty = ref('medium');
        const time = ref(0);
        const showSetting = ref(true);

        const updateTime = () => {
            if (difficulty.value == 'hard') {
                time.value = 5;
            } else if (difficulty.value == 'medium') {
                time.value = 7;
            } else {
                time.value = 10;
            }
        };

        updateTime();

        const typing = () => {
            initGame.value = true;
            if (word.value === inputWord.value) {
                score.value += 1;
                word.value = getRandomWord();
                inputWord.value = '';
                score.value = score.value++;
            }
        };

        const selectDiff = (e: Event) => {
            if (initGame.value) {
                e.preventDefault();
                return;
            }
            difficulty.value = e.target.value;
            updateTime();
        };

        const countTime = () => {
            setInterval(() => {
                time.value -= 1;
            }, 1000);
        };

        return {
            word,
            inputWord,
            typing,
            score,
            initGame,
            difficulty,
            selectDiff,
            time,
            countTime,
            showSetting,
        };
    },
});
</script>

<style scoped lang="scss">
.typing-game-wrapper {
    background-color: #2c3e50;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

button {
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    padding: 5px 15px;
}

select {
    width: 200px;
    padding: 5px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0;
    background-color: #a7c5e3;
    text-transform: capitalize;

    &:focus {
        outline: 0;
    }

    &:disabled {
        opacity: 1;
        color: #000;
        background-color: #a7c5e3;
    }
}

button:focus {
    outline: 0;
}

.settings-btn {
    position: absolute;
    bottom: 30px;
    left: 30px;
}

.settings {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    height: 70px;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(0);
    transition: transform 0.3s ease-in-out;

    &.hide {
        transform: translateY(-100%);
    }
}

.container {
    background-color: #34495e;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
    color: #fff;
    position: relative;
    text-align: center;
    width: 500px;
}

h2 {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 8px;
    border-radius: 4px;
    margin: 0 0 40px;
}

h1 {
    margin: 0;
}

input {
    border: 0;
    border-radius: 4px;
    font-size: 14px;
    width: 300px;
    padding: 12px 20px;
    margin-top: 10px;
}

.score-container {
    position: absolute;
    top: 60px;
    right: 20px;
}

.time-container {
    position: absolute;
    top: 60px;
    left: 20px;
}

.end-game-container {
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>
