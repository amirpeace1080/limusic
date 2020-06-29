import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            musics: []
        },
        getters: {},
        mutations: {
            SAVE_USERS(state, musics) {
                state.musics = musics;
            }
        },
        actions: {
            loadUsers({ commit }) {
                this.$axios.get('https://cc003228-b2da-4cb9-86ed-0a4f1e71e0cd.mock.pstmn.io/?usr=pass').then(result => {
                    commit('SAVE_USERS', result.data);
                }).catch(error => {
                    throw new Error(`API ${error}`);
                });
            }
        }
    })
}

export default createStore