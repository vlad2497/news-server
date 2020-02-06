<template>
    <div>
        <div class="filter-wrapper">
            <div class="search">
                <input
                    class="search__input"
                    type="search"
                    placeholder="Поиск..."
                    v-model="search"
                />
            </div>
            <div class="select">
                <div class="select-wrapper">
                    <v-select
                        class="select__item"
                        v-model="selected.country"
                        :options="options.countries"
                        @input="getFilteredNews"
                        placeholder="Страна"
                    ></v-select>
                </div>
                <div class="select-wrapper">
                    <v-select
                        class="select__item"
                        v-model="selected.category"
                        :options="options.categories"
                        @input="getFilteredNews"
                        placeholder="Категория"
                    ></v-select>
                </div>
            </div>
        </div>
        <div v-if="news.length" class="news">
            <NewsBlock
                :key="item.title"
                v-for="item in news"
                :url-to-image="item.urlToImage"
                :title="item.title"
                :description="item.description"
                :content="item.content"
            />
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
        name: "Home",
        components: {
            NewsBlock, VclBulletList, Pagination
        },
        data(){
            return{
                timer: null,
                search: '',
                news: [],
                pagination: {
                    page: 1,
                    count: 1
                },
                selected: {
                    country: {label: "Россия", code: "ru"},
                    category: {label: "Все", code: "general"}
                },
                options: {
                    countries:[
                        { label: "Россия", code: "ru" },
                        { label: "Англия", code: "gb" }
                    ],
                    categories: [
                        { label: "Все", code: "general" },
                        { label: "Бизнес", code: "business" },
                        { label: "Технологии", code: "technology" },
                        { label: "Здоровье", code: "health" },
                        { label: "Наука", code: "science" },
                        { label: "Спорт", code: "sports" },
                        { label: "Развлечения", code: "entertainment" }
                    ]
                },
            }
        },
        created() {
            this.getNews()
        },
        watch: {
            search: function (value) {
                clearTimeout(this.timer);
                if(value){
                    this.timer = setTimeout(() => {
                        this.getFilteredNews();
                    }, 1500);
                }else{
                    this.timer = setTimeout(() => {
                        this.getNews();
                    }, 1000);
                }
            }
        },
        methods: {
            async getNews(){
                let response = await(articles());
                this.news = response.articles;
                this.pagination.count = response.totalResults;
            },

            async getFilteredNews(){
                let response = await(articles(this.pagination.page, this.selected.category.code, this.selected.country.code, this.search));
                this.news = response.articles;
            },

            changePage(type){
                if(type === 'next')
                    this.pagination.page = this.pagination.page + 1 > this.pagination.count ? this.pagination.count : this.pagination.page + 1
                else
                    this.pagination.page = this.pagination.page - 1 < 0 ? 0 : this.pagination.page - 1
                this.getFilteredNews(this.pagination.page, this.selected.category.code, this.selected.country.code, this.search);
            }
        }
    }
</script>

<style scoped>

</style>