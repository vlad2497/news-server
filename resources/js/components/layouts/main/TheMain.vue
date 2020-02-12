<template>
    <div><router-view></router-view></div>
</template>

<script>
    export default {
        name: "TheMain",
        created(){
            this.authCheck();
        },
        methods: {
            authCheck(){
                this.$store.getters.USER ? this.$router.push('/home') : this.$router.push('/login');
            }
        }
    }
</script>

<style scoped>

</style>