<template>
    <div class="exchange-rate-wrapper">
        <img src="@/assets/money.png" alt="" class="money-img" />
        <h1>Exchange Rate Calculator</h1>
        <p>Choose the currency and the amounts to get the exchange rate</p>

        <div class="container">
            <div class="currency">
                <CurrencyOne
                    v-model:currencyOne="currencyOne"
                    @update:currencyOne="calculate"
                />
                <input
                    type="number"
                    id="amount-one"
                    placeholder="0"
                    v-model="valueOne"
                    @input="calculate"
                />
            </div>

            <div class="swap-rate-container">
                <button class="btn" id="swap" @click="swap">Swap</button>
                <div class="rate" id="rate">
                    {{
                        `1 ${currencyOne} = ${
                            rates[currencyOne] / rates[currencyTwo]
                        } ${currencyTwo}`
                    }}
                </div>
            </div>

            <div class="currency">
                <CurrencyTwo
                    v-model:currencyTwo="currencyTwo"
                    @update:currencyTwo="calculate"
                />
                <input
                    type="number"
                    id="amount-two"
                    placeholder="0"
                    @input="calculate"
                    :value="valueTwo"
                />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import CurrencyOne from './CurrencyOne.vue';
import CurrencyTwo from './CurrencyTwo.vue';

export default defineComponent({
    name: 'Exchange Rate',
    setup(props, { attrs, slots, emit, expose }) {
        const rates: Ref<Record<any, number>> = ref({});
        const currencyOne = ref('USD');
        const currencyTwo = ref('USD');
        const valueOne = ref(1);
        const valueTwo = ref();
        const swap = () => {
            [currencyOne.value, currencyTwo.value] = [currencyTwo.value, currencyOne.value];
        };

        const calculate = () => {
            fetch('https://open.exchangerate-api.com/v6/latest').then(
                (response) => {
                    response.json().then((result) => {
                        rates.value = result.rates;
                        valueTwo.value = (
                            (rates.value[currencyOne.value] /
                                rates.value[currencyTwo.value]) *
                            valueOne.value
                        ).toFixed(2);
                    });
                }
            );
        };

        calculate();

        return {
            rates,
            calculate,
            currencyOne,
            currencyTwo,
            valueOne,
            valueTwo,
            swap
        };
    },
    components: { CurrencyOne, CurrencyTwo },
});
</script>

<style scoped lang="scss">
$primary-color: #5fbaa7;

.exchange-rate-wrapper {
    background-color: #f4f4f4;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 20px;
}

h1 {
    color: $primary-color;
}

p {
    text-align: center;
}

.btn {
    color: #fff;
    background: $primary-color;
    cursor: pointer;
    border-radius: 5px;
    font-size: 12px;
    padding: 5px 12px;
}

.money-img {
    width: 150px;
}

.currency {
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    select {
        padding: 10px 20px 10px 10px;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border: 1px solid #dedede;
        font-size: 16px;

        background: transparent;
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%20000002%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
        background-position: right 10px top 50%, 0, 0;
        background-size: 12px auto, 100%;
        background-repeat: no-repeat;
    }

    input {
        border: 0;
        background: transparent;
        font-size: 30px;
        text-align: right;
    }
}

.swap-rate-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.rate {
    color: $primary-color;
    font-size: 14px;
    padding: 0 10px;
}

select:focus,
input:focus,
button:focus {
    outline: 0;
}

@media (max-width: 600px) {
    .currency input {
        width: 200px;
    }
}
</style>
