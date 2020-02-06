<template>
    <div class="header">
        <img class="header__logo" src="/logo.png" alt="logo" />
        <ul class="header__nav nav">
            <li class="nav__link">
                <router-link to="/home">Главная</router-link>
            </li>
            <li class="nav__link">
                <router-link to="/science">Наука</router-link>
            </li>
            <li class="nav__link">
                <router-link to="/business">Бизнес</router-link>
            </li>
        </ul>
        <div class="header__button-logout" @click="logout">Выйти</div>
    </div>
</template>

<script>
    export default {
        name: "TheHeading",
        methods: {
            async logout(){
                try{
                    await(this.$store.dispatch('LOGOUT_REQUEST'));
                    this.$router.push('/login');
                }catch (e) {
                    alert('Ошибка...');
                }
            }
        }
    }
</script>

<style scoped>

</style>