import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        items: [
            {
                name: 'C4',
                quantity: 0,
            },
            {
                name: 'Rocket',
                quantity: 0,
            },
            {
                name: 'B. Grenade',
                quantity: 0,
            },
            {
                name: 'Exp. Ammo',
                quantity: 0,
            },
            {
                name: 'Explosives',
                quantity: 0,
            },
            {
                name: 'Satchel Charge',
                quantity: 0,
            },
        ],
    },
    mutations: {
        setQuantity(state, name, quantity) {
            state.items[name].quantity = quantity
        },
    },
    actions: {
        incrementAction({ commit }, name, quantity) {
            commit('setQuantity', name, quantity)
        },
    },
})

export default store
