<template>
    <div class="news-block">
        <img class="news-block__img" :src="urlToImage" alt="news" />
        <h3 class="news-block__title">{{title}}</h3>
        <div class="news-block__description">{{description}}</div>
    </div>
</template>

<script>
    export default {
        name: "NewsBlock",
        props: {
            title: String,
            urlToImage: String,
            description: String
        }
    }
</script>

<style scoped>

</style>