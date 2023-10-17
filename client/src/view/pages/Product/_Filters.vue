<template>
    <div class="filter">
        <span class="title">
            {{ title }}
        </span>
        <div class="options">
            <div class="option" v-for="option in options" :key="option.value">
                <input type="radio" @input="$emit('update:selected', option.value)" :id="option.value"
                    :name="option.type" :value="option.value">
                <label :for="option.value">{{ option.displayName }}</label>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    options: Array
})
const emit = defineEmits(['update:selected']);
</script>

<style lang="scss" scoped>
.filter {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 20px 0;

    .title {
        font-size: 16px;
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .option {
            display: flex;
            gap: 16px;
            font-weight: 400;
            font-size: 15px;
            align-items: center;

            input {
                height: 18px;
                width: 18px;

            }
        }
    }
}
</style>