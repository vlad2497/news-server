<template>
    <div class="form-wrapper">
        <form class="form login-form">
            <img class="form__img" src="/logo.png" alt="logo" />
            <h2 class="form__title">Вход</h2>

            <BaseInput
                    v-model="form.login.value"
                    name="login"
                    type="text"
                    label="Логин"
                    :value="form.login.value"
                    :errorType="form.login.error"
            />
            <BaseInput
                    v-model="form.password.value"
                    name="password"
                    type="password"
                    label="Пароль"
                    :value="form.password.value"
                    :error="form.password.error"
            />

            <button class="form__submit" @click="login">Войти</button>
            <p class="form__error">{error}</p>
        </form>
    </div>
</template>

<script>
    import BaseInput from './../ui/auth/BaseInput';

    export default {
        name: "TheLogin",
        data(){
            return {
                form: {
                    login: {
                        value: '',
                        error: ''
                    },
                    password: {
                        value: '',
                        error: ''
                    }
                }
            }
        },
        components: {
            BaseInput
        },
        methods: {
            async login(e){
                e.preventDefault();
                console.log(this.form.login.value, this.form.password.value);
                if(this.validate()){
                    try{
                        await(this.$store.dispatch('LOGIN_REQUEST', {email: this.form.login.value, password: this.form.password.value}));
                        this.$router.push('/home');
                    }catch (e) {
                        alert('Ошибка...');
                    }
                }
            },

            validate(){
                return true;
            },

            acceptData(){

            }
        }
    }
</script>

<style scoped>

</style>