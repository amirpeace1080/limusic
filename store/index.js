import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            musics: [],
            remix: []
        },
        getters: {},
        mutations: {
            SAVE_USERS(state, musics) {
                state.musics = musics;
            },
            SAVE_REMIX(state, remix) {
                state.remix = remix
            }
        },
        actions: {
            loadUsers({ commit }) {
                this.$axios.get('https://cc003228-b2da-4cb9-86ed-0a4f1e71e0cd.mock.pstmn.io/?usr=pass')
                    .then(Response => {
                        commit('SAVE_USERS', Response.data);
                    }).catch(error => {
                        throw new Error(`API ${error}`);
                    });
            },
            loadRemix({ commit }) {
                this.$axios.get('https://e3c0cd52-8d59-49fa-a12e-ef50780674d8.mock.pstmn.io/?user=pass')
                    .then(Response => {
                        commit('SAVE_REMIX', Response.data);
                    }).catch(error => {
                        throw new Error(`API ${error}`);
                    });
            }
        }
    })
}

export default createStore