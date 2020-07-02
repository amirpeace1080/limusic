import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            musics: [],
            remix: [],
            vip: [],
            madahi: []
        },
        getters: {},
        mutations: {
            SAVE_USERS(state, musics) {
                state.musics = musics;
            },
            SAVE_REMIX(state, remix) {
                state.remix = remix
            },
            SAVE_VIP(state, vip) {
                state.vip = vip;
            },
            SAVE_MADAHI(state, madahi) {
                state.madahi = madahi
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
            },
            loadVip({ commit }) {
                this.$axios.get('https://e1f33252-56e0-4275-8720-7e07d0c4a5fd.mock.pstmn.io/?usr=pass')
                    .then(Response => {
                        commit('SAVE_VIP', Response.data);
                    }).catch(error => {
                        throw new Error(`API ${error}`);
                    });
            },
            loadMadahi({ commit }) {
                this.$axios.get('https://0f4508dd-f34c-4ebb-af87-9f797d11f209.mock.pstmn.io/?usr=pass')
                    .then(Response => {
                        commit('SAVE_MADAHI', Response.data);
                    }).catch(error => {
                        throw new Error(`API ${error}`);
                    });
            }
        }
    })
}

export default createStore