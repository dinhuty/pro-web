<template>
    <div class="section-heading">
        <div class="box-left">
            <p class="title">
                {{ titleText }}
            </p>
            <div class="icon" v-if="icon">
                <LottieAnimation :animation-data="icon" :auto-play="true" :loop="true" :speed="1" ref="anim" />
            </div>
        </div>
        <router-link :to="navTo" class="box-right">
            <span class="box-text">
                {{ navText }}
            </span>
            <div class="box-icon">
                <font-awesome-icon icon="angle-right" />
            </div>
        </router-link>
    </div>
</template>
<script setup>
import { LottieAnimation } from "lottie-web-vue"
import { ref, onMounted } from 'vue'

const { titleText, navText, navTo, icon } = defineProps({
    titleText: String,
    navText: String,
    navTo: String,
    icon: Object
})
let anim = ref()

onMounted(() => {
    console.log(typeof icon)
})
</script>
<style lang="scss">
.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 5px 20px;

    @include min-sm {
        padding: 20px;

    }

    // border-bottom: 2px solid $border-section;

    .box-left {
        display: flex;
        gap: 5px;
        align-items: center;

        p {
            font-size: 14px;

            @include min-sm {
                font-size: 20px;
            }

            font-weight: 600;
            text-transform: uppercase;
        }

        .icon {
            height: 32px;
            width: 32px;
        }
    }

    .box-right {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: 13px;

        @include min-sm {
            font-size: 16px;
        }

        &:hover {
            opacity: .8;
        }
    }
}
</style>