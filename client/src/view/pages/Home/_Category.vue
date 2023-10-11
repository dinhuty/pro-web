<template>
    <section class="category">
        <swiper :slides-per-view="6" :space-between="24" :pagination="{ clickable: true }" :navigation="false"
            id="swiper-slider" :breakpoints="breakpoints">
            <swiper-slide class="swiper-item" v-for="category in categories" :key="category.value">
                <div class="card">
                    <div class="card__img">
                        <img :src="category.img" alt="">
                    </div>
                    <div class="card__title">
                        {{ category.name }}
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import categories from '@/utils/category';

console.log(categories)

const breakpoints = {
    375: { slidesPerView: 4.5, spaceBetween: 10 },
    768: { slidesPerView: 5.5, spaceBetween: 16 },
    1024: { slidesPerView: 6.5, spaceBetween: 24 },
    1224: { slidesPerView: 8, spaceBetween: 24 },
}
</script>

<style lang="scss">
.category {
    width: 100%;
    padding: 5px 10px;
    background-color: $light-primary;
    border-radius: 8px;
    box-shadow: $box-shadow-prd;
    #swiper-slider {
        padding: 10px 0;

        .swiper-item {
            width: 100%;
            display: flex;
            justify-content: center;

            .card {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 12px;
                font-size: 13px;
                padding: 5px;
                @include min-sm{
                    padding: 8px 18px;
                }
                border-radius: 15px;
                background: $light-primary;
                font-weight: 500;
                white-space: nowrap;
                text-overflow: ellipsis;
                cursor: pointer;   
                img {
                    padding: 12px;
                    width: 100%;
                    transition: transform .3s cubic-bezier(0.075, 0.82, 0.165, 1);

                    &:hover {
                        transform: scale(1.1);
                    }
                }
                &__title{
                    width: 100%;
                    text-align: center;
                }
            }
        }
    }
}
</style>