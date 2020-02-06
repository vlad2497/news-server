import {login, getUser, logout, refresh} from './../../externalAPI/auth';
import {setLocaleStorageValues, clearLocaleStorageValues, checkExpires} from './../../helpers';

const state = {
    access_token: localStorage.getItem('access_token') || null,
    user: null,
    loader: true
}

const getters = {
    ACCESS_TOKEN: state => state.access_token,
    USER: state => state.user,
    LOADER: state => state.loader
}

const actions = {
    USER_REQUEST:  ({commit, dispatch}) => {
        getUser()
            .then(response => {
                commit('SET_USER', response.data);
                commit('SET_LOADER', false);
            })
            .catch(error => {
                if (error.response.status === 401){
                    if (localStorage.getItem("refresh_token") && checkExpires()) {
                        dispatch('REFRESH_REQUEST');
                    }else{
                        dispatch('LOGOUT_REQUEST');
                    }
                }
            })
    },

    LOGIN_REQUEST: ({commit, dispatch}, {email, password}) => {
        return new Promise((resolve, reject) => {
            login(email, password)
                .then(response => {
                    let { access_token, token_type } = response.data;
                    setLocaleStorageValues(response.data);
                    axios.defaults.headers.common["Authorization"] = `${token_type} ${access_token}`;

                    commit('SET_ACCESS_TOKEN', `${token_type} ${access_token}`);
                    dispatch('USER_REQUEST');
                    resolve('success');
                })
                .catch(error => {
                    clearLocaleStorageValues();
                    commit('SET_ACCESS_TOKEN', '');
                    reject(error);
                })
        });
    },

    LOGOUT_REQUEST: ({commit}) => {
        return new Promise((resolve, reject) => {
            logout()
                .then(() => {
                    commit('SET_USER', null);
                    commit('SET_ACCESS_TOKEN', '');
                    clearLocaleStorageValues();
                    resolve('success');
                })
                .catch(error => {
                    commit('SET_USER', null);
                    commit('SET_ACCESS_TOKEN', '');
                    clearLocaleStorageValues();
                    reject(error);
                })
        });
    },

    REFRESH_REQUEST: ({commit, dispatch}) => {
        refresh()
            .then(response => {
                let { access_token, token_type } = response.data;
                axios.defaults.headers.common["Authorization"] = `${token_type} ${access_token}`;
                setLocaleStorageValues(response.data);

                commit('SET_ACCESS_TOKEN', `${token_type} ${access_token}`);
                dispatch('USER_REQUEST');
            })
            .catch(() => {
                commit('SET_USER', null);
                commit('SET_ACCESS_TOKEN', '');
                clearLocaleStorageValues();
            })
    },
}


const mutations = {
    SET_ACCESS_TOKEN: (state, token) => {
        state.access_token = token;
    },

    SET_USER: (state, user) => {
        state.user = user;
    },

    SET_LOADER: (state, value) => {
        state.loader = value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
