<template>
    <header>
        <div class="logo-wrapper">
            <img
                src="../assets/sulfur_logo.webp"
                alt="logo"
                width="50"
                height="32.5"
            />
            <h1>How much sulfur for raid?</h1>
        </div>

        <div class="theme">
            <h4>Theme switch</h4>
            <label class="switch">
                <input type="checkbox" id="theme_toggle" />
                <span class="slider round"></span>
            </label>
        </div>
    </header>
</template>

<script>
export default {
    mounted() {
        document.querySelector('#theme_toggle').checked = true;
        document.body.setAttribute('data-theme', 'dark');
        this.setThemeButton();
    },
    methods: {
        setThemeButton() {
            // const toggle = document.querySelector('#theme_toggle');
            // toggle.addEventListener('change', (e) => {
            //     e.target.checked
            //         ? document.body.setAttribute('data-theme', 'dark')
            //         : document.body.removeAttribute('data-theme');
            // });
        }
    }
};
</script>

<style>
header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.logo-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.theme {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.theme h4 {
    margin-right: 15px;
    font-weight: 500;
}

.switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

.slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}

input:checked + .slider {
    background-color: #2196f3;
}

input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

@media only screen and (max-width: 600px) {
    header {
        flex-direction: column;
    }
}
</style>
