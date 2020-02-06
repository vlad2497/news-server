<template>
    <div class="input-wrapper">
        <label
            class="input-wrapper__label"
            :for="name">{{label}}
        </label>
        <input
            class="input-wrapper__input"
            :type="type"
            :id="name"
            :value="value"
            @input="updateValue($event.target.value)"
        />
        <p class="input-wrapper__error">{{error}}</p>
    </div>
</template>

<script>
    export default {
        name: "BaseInput",
        props: {
            name: String,
            type: String,
            label: String,
            value: String,
            error: String
        },
        methods:{
            updateValue: function (value) {
                this.$emit('input', value)
            }
        }
    }
</script>

<style scoped>

</style>