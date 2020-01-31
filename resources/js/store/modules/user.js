const state = {
    status: '',
}

const getters = {
    getStatus: state => state.status,
}

const actions = {
    changeStatus: ({commit, dispatch}) => {
        /*axios.get('/')
            .then((resp) => {
                commit('', resp.data);
            })*/
    }
}


const mutations = {
    userStatus: (state, status) => {
        console.log(status);
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
