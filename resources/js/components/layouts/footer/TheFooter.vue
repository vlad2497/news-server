<template>
    <div class="footer">
        <ul class="footer-links">
            <li>
                <router-link to="/home">Главная</router-link>
            </li>
            <li>
                <router-link to="/science">Наука</router-link>
            </li>
            <li>
                <router-link to="/business">Бизнес</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style scoped>

</style>