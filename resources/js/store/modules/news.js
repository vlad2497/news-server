const state = {
    title: '',
    urlToImage: '',
    content: ''
}

const getters = {
    NEWS_TITLE: state => state.title,
    NEWS_IMAGE: state => state.urlToImage,
    NEWS_CONTENT: state => state.content
}

const actions = {
}

const mutations = {
    SET_NEWS_TITLE: (state, title) => {
        state.title = title;
    },

    SET_NEWS_IMAGE: (state, url) => {
        state.urlToImage = url;
    },

    SET_NEWS_CONTENT: (state, value) => {
        state.content = value;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
