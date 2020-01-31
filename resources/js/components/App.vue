<template>
    <div>
        <div>App component</div>
        <router-link to="/comptest">Тест</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>