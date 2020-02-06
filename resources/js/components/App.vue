<template>
    <div>
        <template v-if="!isAuth && hasToken">
            <div>загрузка...</div>
        </template>
        <template v-else>
            <TheHeading v-if="isAuth"/>
            <TheMain/>
            <TheFooter v-if="isAuth"/>
        </template>
    </div>
</template>

<script>
    import TheHeading from './layouts/header/TheHeading';
    import TheFooter from './layouts/footer/TheFooter';
    import TheMain from './layouts/main/TheMain';
    import TheLogin from './auth/TheLogin';

    export default {
        name: "App",
        components: {
            TheHeading, TheFooter, TheMain, TheLogin
        },
        created(){
            this.$store.dispatch('USER_REQUEST');
        },
        computed: {
            isAuth() {
                return this.$store.getters.USER;
            },

            isLoad() {
                return this.$store.getters.LOADER;
            },

            hasToken(){
                return this.$store.getters.ACCESS_TOKEN;
            }
        }
    }
</script>

<style scoped>

</style>