<template>
    <div class="pagination">
        <div
            class="pagination__arrow"
            @click="previousPage"
        >
            &#8678;
        </div>
        <div
            class="pagination__arrow"
            @click="nextPage"
        >
            &#8680;
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            page: Number,
            totalPages: Number,
        },
        methods: {
            nextPage(){
                this.$emit('setPage', 'next');
            },

            previousPage(){
                this.$emit('setPage', 'previous');
            }
        }
    }
</script>

<style scoped>

</style>