<template>
    <Header />
    <div class="item-carousel-wrapper">
        <div class="item-carousel">
            <div class="item-card">
                <img
                    :src="getImg(c4.img)"
                    :alt="c4.name"
                    class="item-card-img"
                />
                <h2 class="item-card-name">{{ c4.name }}</h2>
                <div class="item-card-input-div">
                    <button
                        class="item-card-input-button border-radius-left"
                        v-on:click="
                            c4.quantity > 0
                                ? (c4.quantity -= 1)
                                : (c4.quantity = c4.quantity)
                        "
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min="0"
                        v-model="c4.quantity"
                        class="item-card-input"
                    />
                    <button
                        class="item-card-input-button border-radius-right"
                        v-on:click="c4.quantity += 1"
                    >
                        +
                    </button>
                </div>
            </div>
            <div class="item-card">
                <img
                    :src="getImg(rocket.img)"
                    :alt="rocket.name"
                    class="item-card-img"
                />
                <h2 class="item-card-name">{{ rocket.name }}</h2>
                <div class="item-card-input-div">
                    <button
                        class="item-card-input-button border-radius-left"
                        v-on:click="
                            rocket.quantity > 0
                                ? (rocket.quantity -= 1)
                                : (rocket.quantity = rocket.quantity)
                        "
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min="0"
                        v-model="rocket.quantity"
                        class="item-card-input"
                    />
                    <button
                        class="item-card-input-button border-radius-right"
                        v-on:click="rocket.quantity += 1"
                    >
                        +
                    </button>
                </div>
            </div>
            <div class="item-card">
                <img
                    :src="getImg(beancan_grenade.img)"
                    :alt="beancan_grenade.name"
                    class="item-card-img"
                />
                <h2 class="item-card-name">{{ beancan_grenade.name }}</h2>
                <div class="item-card-input-div">
                    <button
                        class="item-card-input-button border-radius-left"
                        v-on:click="
                            beancan_grenade.quantity > 0
                                ? (beancan_grenade.quantity -= 1)
                                : (beancan_grenade.quantity =
                                      beancan_grenade.quantity)
                        "
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min="0"
                        v-model="beancan_grenade.quantity"
                        class="item-card-input"
                    />
                    <button
                        class="item-card-input-button border-radius-right"
                        v-on:click="beancan_grenade.quantity += 1"
                    >
                        +
                    </button>
                </div>
            </div>
            <div class="item-card">
                <img
                    :src="getImg(explo_ammo.img)"
                    :alt="explo_ammo.name"
                    class="item-card-img"
                />
                <h2 class="item-card-name">{{ explo_ammo.name }}</h2>
                <div class="item-card-input-div">
                    <button
                        class="item-card-input-button border-radius-left"
                        v-on:click="
                            explo_ammo.quantity > 0
                                ? (explo_ammo.quantity -= 1)
                                : (explo_ammo.quantity = explo_ammo.quantity)
                        "
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min="0"
                        v-model="explo_ammo.quantity"
                        class="item-card-input"
                    />
                    <button
                        class="item-card-input-button border-radius-right"
                        v-on:click="explo_ammo.quantity += 1"
                    >
                        +
                    </button>
                </div>
            </div>
            <div class="item-card">
                <img
                    :src="getImg(explosives.img)"
                    :alt="explosives.name"
                    class="item-card-img"
                />
                <h2 class="item-card-name">{{ explosives.name }}</h2>
                <div class="item-card-input-div">
                    <button
                        class="item-card-input-button border-radius-left"
                        v-on:click="
                            explosives.quantity > 0
                                ? (explosives.quantity -= 1)
                                : (explosives.quantity = explosives.quantity)
                        "
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min="0"
                        v-model="explosives.quantity"
                        class="item-card-input"
                    />
                    <button
                        class="item-card-input-button border-radius-right"
                        v-on:click="explosives.quantity += 1"
                    >
                        +
                    </button>
                </div>
            </div>
            <div class="item-card">
                <img
                    :src="getImg(satchel_charge.img)"
                    :alt="satchel_charge.name"
                    class="item-card-img"
                />
                <h2 class="item-card-name">{{ satchel_charge.name }}</h2>
                <div class="item-card-input-div">
                    <button
                        class="item-card-input-button border-radius-left"
                        v-on:click="
                            satchel_charge.quantity > 0
                                ? (satchel_charge.quantity -= 1)
                                : (satchel_charge.quantity =
                                      satchel_charge.quantity)
                        "
                    >
                        -
                    </button>
                    <input
                        type="number"
                        min="0"
                        v-model="satchel_charge.quantity"
                        class="item-card-input"
                    />
                    <button
                        class="item-card-input-button border-radius-right"
                        v-on:click="satchel_charge.quantity += 1"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
        <p>
            Use <kbd>SHIFT</kbd> + <kbd>SCROLL</kbd> or <kbd>DRAG</kbd> to find
            your item
        </p>
    </div>

    <div class="mixing-table">
        <p>Are you using Mixing Table?</p>
        <label class="switch">
            <input type="checkbox" id="theme_toggle" v-model="hasMixingTable" />
            <span class="slider round"></span>
        </label>
    </div>

    <div class="items-info">
        <div class="items-info-details">
            <h2>Sulfur:</h2>
            <h2>Sulfur:</h2>
        </div>
        <div class="items-info-details">
            <h2>Metal Fragments:</h2>
            <h2>Metal Fragments:</h2>
        </div>
        <div class="items-info-details">
            <h2>Low grade fuel:</h2>
            <h2>Low grade fuel:</h2>
        </div>
    </div>

    <!-- <Footer /> -->
</template>

<script>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
    components: {
        Header,
        Footer,
    },
    data() {
        return {
            hasMixingTable: false,
            finalArray: [],
            c4: {
                name: 'C4',
                quantity: 0,
                img: 'c4.webp',
                cost: [
                    {
                        name: 'Tech Trash',
                        quantity: 2,
                    },
                    {
                        name: 'Explosives',
                        quantity: 20,
                    },
                    {
                        name: 'Cloth',
                        quantity: 5,
                    },
                ],
            },
            rocket: {
                name: 'Rocket',
                quantity: 0,
                img: 'rocket.webp',
                cost: [
                    {
                        name: 'Metal Pipe',
                        quantity: 2,
                    },
                    {
                        name: 'Gun Powder',
                        quantity: 150,
                    },
                    {
                        name: 'Explosives',
                        quantity: 10,
                    },
                ],
            },
            beancan_grenade: {
                name: 'B. Grenade',
                quantity: 0,
                img: 'beancan_grenade.webp',
                cost: [
                    {
                        name: 'Metal Fragments',
                        quantity: 20,
                    },
                    {
                        name: 'Gun Powder',
                        quantity: 60,
                    },
                ],
            },
            explo_ammo: {
                name: 'Exp. Ammo',
                quantity: 0,
                img: 'explosive_ammo.webp',
                cost: [
                    {
                        name: 'Metal Fragments',
                        quantity: 10,
                    },
                    {
                        name: 'Gun Powder',
                        quantity: 20,
                    },
                    {
                        name: 'Sulfur',
                        quantity: 10,
                    },
                ],
            },
            explosives: {
                name: 'Explosives',
                quantity: 0,
                img: 'explosives.webp',
                cost: [
                    {
                        name: 'Gun Powder',
                        quantity: 50,
                    },
                    {
                        name: 'Low Grade Fuel',
                        quantity: 3,
                    },
                    {
                        name: 'Sulfur',
                        quantity: 10,
                    },
                    {
                        name: 'Metal Fragments',
                        quantity: 10,
                    },
                ],
            },
            satchel_charge: {
                name: 'Satchel Charge',
                quantity: 0,
                img: 'satchel_charge.webp',
                cost: [
                    {
                        name: 'Rope',
                        quantity: 1,
                    },
                    {
                        name: 'Beancan Grenade',
                        quantity: 4,
                    },
                    {
                        name: 'Small Stash',
                        quantity: 1,
                    },
                ],
            },
        }
    },
    watch: {
        c4: {
            handler() {
                this.calculateItems()
            },
            deep: true,
        },
        rocket: {
            handler() {
                this.calculateItems()
            },
            deep: true,
        },
        beancan_grenade: {
            handler() {
                this.calculateItems()
            },
            deep: true,
        },
        explo_ammo: {
            handler() {
                this.calculateItems()
            },
            deep: true,
        },
        explosives: {
            handler() {
                this.calculateItems()
            },
            deep: true,
        },
        satchel_charge: {
            handler() {
                this.calculateItems()
            },
            deep: true,
        },
    },
    methods: {
        getImg(img) {
            return new URL(`./assets/${img}`, import.meta.url).href
        },
        addToArray(items) {
            items.forEach((item) => {
                if (
                    this.finalArray.find(
                        (element) => element.name === item.name
                    )
                ) {
                    this.finalArray.find(
                        (element) => element.name === item.name
                    ).quantity += item.quantity
                    return
                }
                this.finalArray.push(item)
            })
        },
        calculateItems() {
            this.finalArray = []

            let c4Items = []
            let rocketItems = []
            let bGrenadeItems = []
            let exploAmmoItems = []
            let explosivesItems = []
            let satchelItems = []

            if (this.c4.quantity > 0) {
                c4Items = this.c4.cost.map((item) => {
                    return {
                        name: item.name,
                        quantity: item.quantity * this.c4.quantity,
                    }
                })
                this.addToArray(c4Items)
            }

            if (this.rocket.quantity > 0) {
                rocketItems = this.beancan_grenade.cost.map((item) => {
                    return {
                        name: item.name,
                        quantity: item.quantity * this.rocket.quantity,
                    }
                })
                this.addToArray(rocketItems)
            }

            if (this.beancan_grenade.quantity > 0) {
                bGrenadeItems = this.beancan_grenade.cost.map((item) => {
                    return {
                        name: item.name,
                        quantity: item.quantity * this.beancan_grenade.quantity,
                    }
                })
                this.addToArray(bGrenadeItems)
            }

            if (this.explo_ammo.quantity > 0) {
                exploAmmoItems = this.explo_ammo.cost.map((item) => {
                    return {
                        name: item.name,
                        quantity: item.quantity * this.explo_ammo.quantity,
                    }
                })
                this.addToArray(exploAmmoItems)
            }

            if (this.explosives.quantity > 0) {
                explosivesItems = this.explosives.cost.map((item) => {
                    return {
                        name: item.name,
                        quantity: item.quantity * this.explosives.quantity,
                    }
                })
                this.addToArray(explosivesItems)
            }

            if (this.satchel_charge.quantity > 0) {
                satchelItems = this.satchel_charge.cost.map((item) => {
                    return {
                        name: item.name,
                        quantity: item.quantity * this.satchel_charge.quantity,
                    }
                })
                this.addToArray(satchelItems)
            }

            // finalArray = [
            //     ...c4Items,
            //     ...rocketItems,
            //     ...bGrenadeItems,
            //     ...exploAmmoItems,
            //     ...explosivesItems,
            //     ...satchelItems,
            // ]

            console.log(this.finalArray)
        },
    },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap');

[data-theme='dark'] {
    --color-bg: rgb(48, 48, 48);
    --color-bg-secondary: rgb(70, 70, 70);
    --font-color: #eeeeee;
    --link-color: #b6b6b6;
}

[data-theme='light'] {
    --color-bg: #ffffff;
    --color-bg-secondary: rgb(197, 197, 197);
    --font-color: #2c3e50;
    --link-color: #3f62fd;
}

body {
    margin: 0;
    padding: 0;
    color: var(--font-color);
    background: var(--color-bg);
    touch-action: manipulation;
}

a {
    color: var(--font-color) !important;
}

#app {
    font-family: 'Poppins', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

.item-carousel {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}

.item-carousel::-webkit-scrollbar {
    display: none;
}

.item-carousel-wrapper p {
    text-align: left;
    margin-top: 0;
    margin-left: 1rem;
}

.items-info {
    margin-top: 30px;
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: 1.2rem;
    justify-content: space-between;
    background: var(--color-bg-secondary);
    padding: 1rem 2rem;
    border-radius: 1rem;
}

.items-info-details {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.mixing-table {
    margin-top: 30px;
    width: 40vw;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 1.2rem;
    justify-content: space-between;
    background: var(--color-bg-secondary);
    padding: 1rem 2rem;
    border-radius: 1rem;
}
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

.item-card h2 {
    font-weight: 400;
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

@media only screen and (max-width: 1200px) {
    .items-info {
        width: 60vw;
    }

    .mixing-table {
        width: 60vw;
    }
}

@media only screen and (max-width: 750) {
    .items-info {
        width: 75vw;
    }

    .mixing-table {
        width: 75vw;
    }
}

@media only screen and (max-width: 600px) {
    .items-info {
        width: 80vw;
    }

    .mixing-table {
        width: 80vw;
    }
}
</style>
