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
    props: {
        img: String,
        name: String,
        quantity: Number,
    },
    methods: {
        getImg(img) {
            return new URL(`../assets/${img}`, import.meta.url).href
        },
        increment() {
            this.quantity += 1
        },
        decrement() {
            if (this.quantity <= 0) return
            this.quantity -= 1
        },
    },
}
</script>
