<template>
    <div class="app-home">
        <Container class="home-container">
            <div class="home-slider">
                <swiper :modules="modules" :slides-per-view="1" :space-between="10" @swiper="onSwiper"
                    @slideChange="onSlideChange" :pagination="{ clickable: true }" :navigation="true" id="swiper-slider">
                    <swiper-slide class="swiper-item" v-for="n in 6" :key="n">
                        <img :src="require('@/assets/images/banner.jpg')" alt="">
                    </swiper-slide>
                </swiper>
            </div>
            <div class="home-category">
                <category />
            </div>
            <div class="home-sales">
                <sales />
            </div>
            <div class="home-product--new">
                <new-product />
            </div>
            <div class="home-brands">
                <brands />
            </div>
            <div class="home-sellers">
                <best-seller />
            </div>
            <div class="home-news">
                <news />
            </div>
        </Container>
    </div>
</template>


<script setup >
import { Swiper, SwiperSlide } from 'swiper/vue';
import Container from '@/view/common/Container.vue';
import Category from './_Category.vue';
import NewProduct from './_NewProduct.vue';
import BestSeller from './_BestSeller.vue';
import Brands from './_Brands.vue';
import Sales from './_Sales.vue';
import News from './_News.vue'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cube'

const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
const modules = [Navigation, Pagination, Autoplay, EffectCube]
</script>
<style lang="scss">
.app-home {
    .home-container {
        display: flex;
        flex-direction: column;
        gap: 18px;
        padding-bottom: 40px;        
    }

    .home-slider {
        width: 100%;
        overflow: hidden;
        border-radius: 8px ;
        #swiper-slider {
            .swiper-slider {
                transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
            }

            .swiper-button-prev,
            .swiper-button-next {
                transition: all .3s cubic-bezier(0.075, 0.82, 0.165, 1);
                display: none;

                &::after {
                    color: $navigation-btn-color;
                    font-size: 2rem;
                    font-weight: 800;

                }

                &:hover {
                    transform: scale(1.1);
                }

                @include min-lg {
                    display: block;
                }
            }


            .swiper-pagination-bullet {
                &.swiper-pagination-bullet-active {
                    width: 22px;
                    border-radius: 4px;
                    background-color: $azure;
                    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
            }

        }

        img {
            width: 100%;
            object-fit: contain;
        }

    }

    .home-category {
        width: 100%;
    }
}
</style>