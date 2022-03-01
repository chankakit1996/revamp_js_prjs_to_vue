<template>
    <div class="movie-seat-booking-wrapper">
        <div class="movie-container">
            <label>Pick a movie:</label>
            <select id="movie" v-model="selectedValue">
                <option value="10">Avengers: Endgame ($10)</option>
                <option value="12">Joker ($12)</option>
                <option value="8">Toy Story 4 ($8)</option>
                <option value="9">The Lion King ($9)</option>
            </select>
        </div>

        <ul class="showcase">
            <li>
                <div class="seat"></div>
                <small>N/A</small>
            </li>
            <li>
                <div class="seat selected"></div>
                <small>Selected</small>
            </li>
            <li>
                <div class="seat occupied"></div>
                <small>Occupied</small>
            </li>
        </ul>

        <div class="container">
            <div class="screen"></div>

            <div class="row" v-for="(row, index) in distribution" :key="index">
                <div
                    class="seat"
                    @click="selectSeat(seat)"
                    :class="[
                        seat.value === 1 ? 'occupied' : '',
                        seat.value === 2 ? 'selected' : '',
                    ]"
                    v-for="(seat, index) in row"
                    :key="index"
                ></div>
            </div>
        </div>

        <p class="text">
            You have selected <span id="count">{{ count }}</span> seats for a
            price of $<span id="total">
                {{ total }}
            </span>
        </p>
    </div>
</template>
<script lang="ts">
import { getRandomInt } from '@/helper';
import { computed, defineComponent, Ref, ref } from 'vue';

export default defineComponent({
    name: 'Movie Seat Booking',
    setup(props, { attrs, slots, emit, expose }) {
        const distribution: Ref<number>[][] = [];
        const rows = getRandomInt(10) + 1;
        const minSeat = 9;
        for (let i = 0; i < rows; i++) {
            const seats = [];
            for (let j = 0; j < minSeat; j++) {
                // 0: seat, 1: occupied, 2: selected
                seats.push(ref(getRandomInt(2)));
            }
            distribution.push(seats);
        }
        const count = ref(0);
        const total = computed(() => {
            return selectedValue.value * count.value;
        });
        const selectedValue = ref(10);
        const selectSeat = (seat: Ref<number>) => {
            if (seat.value === 2) {
                seat.value = 0;
                count.value--;
            } else if (seat.value === 0) {
                seat.value = 2;
                count.value++;
            } else {
                return;
            }
        };
        return {
            distribution,
            count,
            total,
            selectedValue,
            selectSeat,
        };
    },
});
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

div.movie-seat-booking-wrapper {
    background-color: #242333;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Lato', sans-serif;
    margin: 0;
}

.movie-container {
    margin: 20px 0;
}

.movie-container select {
    background-color: #fff;
    border: 0;
    border-radius: 5px;
    font-size: 14px;
    margin-left: 10px;
    padding: 5px 15px 5px 15px;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
}

.container {
    perspective: 1000px;
    margin-bottom: 30px;
}

.seat {
    background-color: #444451;
    height: 12px;
    width: 15px;
    margin: 3px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}

.seat.selected {
    background-color: #6feaf6;
}

.seat.occupied {
    background-color: #fff;
}

.seat:nth-of-type(2) {
    margin-right: 18px;
}

.seat:nth-last-of-type(2) {
    margin-left: 18px;
}

.seat:not(.occupied):hover {
    cursor: pointer;
    transform: scale(1.2);
}

.showcase .seat:not(.occupied):hover {
    cursor: default;
    transform: scale(1);
}

.showcase {
    background: rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    border-radius: 5px;
    color: #777;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
}

.showcase li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
}

.showcase li small {
    margin-left: 2px;
}

.row {
    display: flex;
}

.screen {
    background-color: #fff;
    height: 70px;
    width: 100%;
    margin: 15px 0;
    transform: rotateX(-45deg);
    box-shadow: 0 3px 10px rgba(255, 255, 255, 0.7);
}

p.text {
    margin: 5px 0;
}

p.text span {
    color: #6feaf6;
}
</style>
