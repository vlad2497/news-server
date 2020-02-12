import store from "../../store";

export const isAuth = (to, from, next) => {
    if (store.getters.USER) {
        next();
        return
    }
    next('/login')
}

export const isNotAuth = (to, from, next) => {
    if (!store.getters.USER) {
        next();
        return
    }
    next('/home')
}