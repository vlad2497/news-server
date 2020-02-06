<template>
    <div>
        <div v-if="news.length" class="news">
            <NewsBlock :key="item.id" v-for="item in news" :url-to-image="item.urlToImage" :title="item.title" :description="item.description"/>
        </div>
        <div class="news" v-else>
            <VclBulletList
                    v-for="i in 8"
                    :key="i"
                    width=340
                    height=300
                    primary="#B6CEC7"
            />
        </div>
        <Pagination @setPage="changePage"/>
    </div>
</template>

<script>
    import NewsBlock from './../../common/news/NewsBlock';
    import {articles} from "../../../externalAPI/news";
    import { VclBulletList } from 'vue-content-loading';
    import Pagination from './../../common/pagination/Pagination';

    export default {
        name: "Science",
        components: {
            NewsBlock, Pagination, VclBulletList
        },
        data() {
            return {
                news: [],
                pagination: {
                    page: 1,
                    count: 1
                }
            }
        },
        created() {
            this.getNews()
        },
        methods: {
            async getNews(){
                let response = await(articles(this.pagination.page, 'science' ));
                this.news = response.articles;
                this.pagination.count = response.totalResults;
            },

            changePage(type){
                if(type === 'next')
                    this.pagination.page = this.pagination.page + 1 > this.pagination.count ? this.pagination.count : this.pagination.page + 1
                else
                    this.pagination.page = this.pagination.page - 1 < 0 ? 0 : this.pagination.page - 1
                this.getNews(this.pagination.page, 'science');
            }
        }
    }
</script>

<style scoped>

</style>