<template>
    <div class="expense-tracker-wrapper">
        <h2>Expense Tracker</h2>

        <div class="container">
            <h4>Your Balance</h4>
            <h1 id="balance">
                ${{ parseInt(income, 10) - parseInt(expense, 10) }}
            </h1>
            <div class="inc-exp-container">
                <div>
                    <h4>Income</h4>
                    <p id="money-plus" class="money plus">+${{ income }}</p>
                </div>
                <div>
                    <h4>Expense</h4>
                    <p id="money-minus" class="money minus">-${{ expense }}</p>
                </div>
            </div>

            <h3>History</h3>
            <ul id="list" class="list">
                <!-- <li class="minus">
          Cash <span>-$400</span><button class="delete-btn">x</button>
        </li> -->
                <li :class="tran.className" v-for="(tran, index) in trans">
                    {{ tran.name }}
                    <span>${{ Math.abs(tran.amount) }}</span>
                    <button class="delete-btn" @click="removeTrans(index)">
                        x
                    </button>
                </li>
            </ul>

            <h3>Add new transaction</h3>
            <form id="form" @submit.prevent="addTrans" @reset.prevent="reset">
                <div class="form-control">
                    <label for="text">Text</label>
                    <input
                        type="text"
                        id="text"
                        v-model="name"
                        placeholder="Enter text..."
                    />
                </div>
                <div class="form-control">
                    <label for="amount"
                        >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input
                        type="number"
                        v-model="amount"
                        placeholder="Enter amount..."
                    />
                </div>
                <button class="btn" type="submit">Add transaction</button>
                <button class="btn" type="reset">Reset transaction</button>
            </form>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent, onBeforeUnmount, Ref, ref } from 'vue';

function getTrans() {
    const trans = localStorage.getItem('transItem');
    if (trans) {
        return JSON.parse(trans);
    } else {
        return [];
    }
}

interface Transaction {
    name: string;
    amount: number;
    className: string;
}

export default defineComponent({
    name: 'Expense Tracker',
    setup(props, { attrs, slots, emit, expose }) {
        const name = ref();
        const amount = ref();
        const trans: Ref<Transaction[]> = ref(getTrans());
        const income = computed(() => {
            return trans.value
                .filter((tran) => tran.amount > 0)
                .reduce((partialSum, tran) => partialSum + tran.amount, 0)
                .toFixed(2);
        });
        const expense = computed(() => {
            return Math.abs(
                trans.value
                    .filter((tran) => tran.amount < 0)
                    .reduce((partialSum, tran) => partialSum + tran.amount, 0)
            ).toFixed(2);
        });

        const addTrans = () => {
            if (name.value && amount.value) {
                const className = amount.value < 0 ? 'minus' : 'plus';
                trans.value.push({
                    name: name.value,
                    amount: amount.value,
                    className: className,
                });
                name.value = '';
                amount.value = '';
            } else {
                alert('Please add a text and amount');
            }
        };
        const removeTrans = (index: number) => {
            trans.value.splice(index, 1);
        };

        const reset = () => {
            trans.value = [];
        };

        window.onbeforeunload = () => {
            localStorage.setItem('transItem', JSON.stringify(trans.value));
        };
        return {
            addTrans,
            removeTrans,
            trans,
            name,
            amount,
            income,
            expense,
            reset,
        };
    },
});
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

$box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

.expense-tracker-wrapper {
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
    font-family: 'Lato', sans-serif;
}

.container {
    margin: 30px auto;
    width: 350px;
}

h1 {
    letter-spacing: 1px;
    margin: 0;
}

h3 {
    border-bottom: 1px solid #bbb;
    padding-bottom: 10px;
    margin: 40px 0 10px;
}

h4 {
    margin: 0;
    text-transform: uppercase;
}

.inc-exp-container {
    background-color: #fff;
    box-shadow: $box-shadow;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;

    > div {
        flex: 1;
        text-align: center;

        &:first-of-type {
            border-right: 1px solid #dedede;
        }
    }
}

.money {
    font-size: 20px;
    letter-spacing: 1px;
    margin: 5px 0;

    &.plus {
        color: #2ecc71;
    }

    &.minus {
        color: #c0392b;
    }
}

label {
    display: inline-block;
    margin: 10px 0;
}

input {
    &[type='text'],
    &[type='number'] {
        border: 1px solid #dedede;
        border-radius: 2px;
        display: block;
        font-size: 16px;
        padding: 10px;
        width: 100%;
    }
    &.error {
        border-color: #e74c3c;
    }
}

.btn {
    cursor: pointer;
    background-color: #9c88ff;
    box-shadow: $box-shadow;
    color: #fff;
    border: 0;
    display: block;
    font-size: 16px;
    margin: 10px 0 30px;
    padding: 10px;
    width: 100%;

    &:focus {
        outline: 0;
    }
}

.delete-btn:focus {
    outline: 0;
}

.list {
    list-style-type: none;
    padding: 0;
    margin-bottom: 40px;

    li {
        background-color: #fff;
        box-shadow: $box-shadow;
        color: #333;
        display: flex;
        justify-content: space-between;
        position: relative;
        padding: 10px;
        margin: 10px 0;

        &.plus {
            border-right: 5px solid #2ecc71;
        }

        &.minus {
            border-right: 5px solid #c0392b;
        }

        &:hover .delete-btn {
            opacity: 1;
        }
    }
}

.delete-btn {
    cursor: pointer;
    background-color: #e74c3c;
    border: 0;
    color: #fff;
    font-size: 20px;
    padding: 2px 5px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-100%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}
</style>
