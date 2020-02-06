import store from "../../store";

export const isAuth = (to, from, next) => {
    if (store.getters.ACCESS_TOKEN) {
        next();
        return
    }
    next('/login')
}

export const isNotAuth = (to, from, next) => {
    if (!store.getters.ACCESS_TOKEN) {
        next();
        return
    }
    next('/home')
}