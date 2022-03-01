<template>
    <div class="memory-cards-wrapper">
        <button id="clear" class="clear btn" @click="resetCard">
            <i class="fas fa-trash"></i> Clear Cards
        </button>

        <h1>
            Memory Cards
            <button
                id="show"
                class="btn btn-small"
                @click="showAddCard = !showAddCard"
            >
                <i class="fas fa-plus"></i> Add New Card
            </button>
        </h1>

        <div id="cards-container" class="cards">
            <div
                class="card"
                v-for="(card, index) in cards"
                :class="[
                    card.flipped ? 'show-answer' : '',
                    currentIndex == index ? 'active' : '',
                    currentIndex > index ? 'right' : '',
                    currentIndex < index ? 'left' : '',
                ]"
            >
                <div
                    class="inner-card"
                    :key="card.question"
                    @click="card.flipped = !card.flipped"
                >
                    <div class="inner-card-back" v-if="card.flipped">
                        <p>
                            {{ card.answer }}
                        </p>
                    </div>
                    <div class="inner-card-front" v-else>
                        <p>
                            {{ card.question }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="navigation">
            <button id="prev" class="nav-button" @click="updateCard(-1)">
                <i class="fas fa-arrow-left"></i>
            </button>

            <p id="current">
                {{
                    cards.length > 0
                        ? `${currentIndex + 1}/${cards.length}`
                        : ''
                }}
            </p>

            <button id="next" class="nav-button" @click="updateCard(1)">
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>

        <div
            id="add-container"
            class="add-container"
            :class="showAddCard ? 'show' : ''"
        >
            <h1>
                Add New Card
                <button
                    id="hide"
                    class="btn btn-small btn-ghost"
                    @click="showAddCard = !showAddCard"
                >
                    <i class="fas fa-times"></i>
                </button>
            </h1>

            <div class="form-group">
                <label for="question">Question</label>
                <textarea
                    id="question"
                    placeholder="Enter question..."
                    v-model="question"
                ></textarea>
            </div>

            <div class="form-group">
                <label for="answer">Answer</label>
                <textarea
                    id="answer"
                    placeholder="Enter Answer..."
                    v-model="answer"
                ></textarea>
            </div>

            <button id="add-card" class="btn" @click="addCard">
                <i class="fas fa-plus"></i> Add Card
            </button>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue';

interface Card {
    question: string;
    answer: string;
    flipped: boolean;
}

const localStorageItem = 'memoryCards';

const getCard = () => {
    const cards = localStorage.getItem(localStorageItem);
    if (cards) {
        return JSON.parse(cards);
    } else {
        return [];
    }
};

export default defineComponent({
    name: 'Memory Cards',
    setup(props, { attrs, slots, emit, expose }) {
        const currentIndex = ref(0);
        const showAddCard = ref(false);
        const question = ref();
        const answer = ref();
        const cards: Ref<Card[]> = ref(getCard());
        const currentCard = computed(() => {
            return cards.value[currentIndex.value];
        });

        const addCard = () => {
            if (!question.value || !answer.value) return;
            cards.value.push({
                question: question.value,
                answer: answer.value,
                flipped: false,
            });
            question.value = '';
            answer.value = '';
            showAddCard.value = !showAddCard.value;
        };

        const updateCard = (v: number) => {
            const tmp = currentIndex.value + v;
            if (tmp >= cards.value.length || tmp < 0) return;
            currentIndex.value = currentIndex.value + v;
        };

        const resetCard = () => {
            cards.value = [];
        };

        window.onbeforeunload = () => {
            localStorage.setItem(localStorageItem, JSON.stringify(cards.value));
        };

        return {
            cards,
            currentCard,
            updateCard,
            currentIndex,
            showAddCard,
            addCard,
            question,
            answer,
            resetCard,
        };
    },
});
</script>

<style scoped lang="scss">
.memory-cards-wrapper {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    font-family: 'Lato', sans-serif;
}

h1 {
    position: relative;

    button {
        position: absolute;
        right: 0;
        transform: translate(120%, -50%);
        z-index: 2;
    }
}

.btn {
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 3px;
    font-size: 14px;
    margin-top: 20px;
    padding: 10px 15px;
}

.btn-small {
    font-size: 12px;
    padding: 5px 10px;
}

.btn-ghost {
    border: 0;
    background-color: transparent;
}

.clear {
    position: absolute;
    bottom: 30px;
    left: 30px;
}

.cards {
    perspective: 1000px;
    position: relative;
    height: 300px;
    width: 500px;
    max-width: 100%;
}

.card {
    position: absolute;
    opacity: 0;
    font-size: 1.5em;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateX(50%) rotateY(-10deg);
    transition: transform 0.4s ease, opacity 0.4s ease;

    &.active {
        cursor: pointer;
        opacity: 1;
        z-index: 10;
        transform: translateX(0) rotateY(0deg);
    }

    &.left {
        transform: translateX(-50%) rotateY(10deg);
    }
}

.inner-card {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    height: 100%;
    width: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s ease;
}

.card.show-answer .inner-card {
    transform: rotateX(180deg);
}

.inner-card-front,
.inner-card-back {
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    background: #fff;
}

.inner-card-front {
    transform: rotateX(0deg);
    z-index: 2;
}

.inner-card-back {
    transform: rotateX(180deg);
}

.inner-card-front::after,
.inner-card-back::after {
    content: '\f021  Flip';
    font-family: 'Font Awesome 5 Free', Lato, sans-serif;
    position: absolute;
    top: 10px;
    right: 10px;
    font-weight: bold;
    font-size: 16px;
    color: #ddd;
}

.navigation {
    display: flex;
    margin: 20px 0;

    .nav-button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 16px;
    }

    p {
        margin: 0 25px;
    }
}

.add-container {
    opacity: 0;
    z-index: -1;
    background-color: #f0f0f0;
    border-top: 2px solid #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    transition: 0.3s ease;

    &.show {
        opacity: 1;
        z-index: 2;
    }

    h3 {
        margin: 10px 0;
    }
}

.form-group {
    label {
        display: block;
        margin: 20px 0 10px;
    }

    textarea {
        border: 1px solid #aaa;
        border-radius: 3px;
        font-size: 16px;
        padding: 12px;
        min-width: 500px;
        max-width: 100%;
    }
}
</style>
