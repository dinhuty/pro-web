<template>
    <div class="filter">
        <span class="title">
            {{ title }}
        </span>
        <div class="options">
            <div class="option" v-for="n in 5" :key="n">
                <input type="checkbox" id="apple" name="apple" value="HTML">
                <label for="apple">Apple</label>

            </div>
        </div>
    </div>
</template>
<script setup>
defineProps({
    title: String,
    options: Array
})
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