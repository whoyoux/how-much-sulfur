<template>
    <Header />
    <div class="item-carousel-wrapper">
        <div class="item-carousel">
            <ItemInCarousel img="c4.webp" name="C4" :quantity="1" />
            <ItemInCarousel img="rocket.webp" name="Rocket" :quantity="1" />
            <ItemInCarousel
                img="beancan_grenade.webp"
                name="B. Grenade"
                :quantity="1"
            />
            <ItemInCarousel
                img="explosive_ammo.webp"
                name="Exp. Ammo"
                :quantity="1"
            />
            <ItemInCarousel
                img="explosives.webp"
                name="Explosives"
                :quantity="1"
            />
            <ItemInCarousel
                img="satchel_charge.webp"
                name="Satchel Charge"
                :quantity="1"
            />
        </div>
        <p>
            Use <kbd>SHIFT</kbd> + <kbd>SCROLL</kbd> or <kbd>DRAG</kbd> to find
            your item
        </p>
    </div>
    <!-- <Footer /> -->
</template>

<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import ItemInCarousel from './components/ItemInCarousel.vue';
export default {
    components: {
        Header,
        ItemInCarousel,
        Footer
    },
    data() {
        return {
            items: []
        };
    }
};
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
</style>
