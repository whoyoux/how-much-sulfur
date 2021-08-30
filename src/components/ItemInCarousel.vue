<template>
    <div class="item-card">
        <img :src="getImg(img)" :alt="name" class="item-card-img" />
        <h2 class="item-card-name">{{ name }}</h2>
        <div class="item-card-input-div">
            <button
                class="item-card-input-button border-radius-left"
                v-on:click="
                    quantity > 0 ? (quantity -= 1) : (quantity = quantity)
                "
            >
                -
            </button>
            <input
                type="number"
                min="0"
                v-model="quantity"
                class="item-card-input"
            />
            <button
                class="item-card-input-button border-radius-right"
                v-on:click="quantity += 1"
            >
                +
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {},
    props: {
        img: String,
        name: String,
        quantity: Number
    },
    methods: {
        getImg(img) {
            return new URL(`../assets/${img}`, import.meta.url).href;
        },
        increment() {
            this.quantity += 1;
        },
        decrement() {
            if (this.quantity <= 0) return;
            this.quantity -= 1;
        }
    }
};
</script>

<style>
.item-card {
    background-color: var(--color-bg-secondary);
    width: 200px;
    height: 250px;
    padding: 1rem;
    border-radius: 1rem;
    margin: 1rem;
    flex: 0 0 auto;
    user-select: none;
}

.item-card-img {
    width: 70%;
}

.item-card-name {
    margin-top: 0;
    margin-bottom: 0.7rem;
}

.item-card-input-div {
    display: flex;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
}

.item-card-input::-webkit-inner-spin-button,
.item-card-input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.item-card-input:focus {
    outline: none;
}

.item-card-input {
    font-size: 18px;
    height: 3rem;
    border: 0;
    border-radius: 0;
    background-color: var(--color-bg);
    color: var(--font-color);
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    font-weight: lighter;
}

.item-card-input-button {
    font-size: 25px;
    width: 4em;
    height: 3rem;
    padding: 0;
    margin: 0;
    border: 0;
    cursor: pointer;
    background-color: var(--color-bg);
    color: var(--font-color);
}

.border-radius-left {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
}

.border-radius-right {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
}
</style>
