<template>
    <Container>
        <div class="app-product">
            <div class="product-slider">
                <swiper :pagination="true" :modules="modules" class="mySwiper">
                    <swiper-slide v-for="n in 3" :key="n">
                        <div class="slider-img">
                            <img :src="require('@/assets/images/laptop-banner.jpg')" alt="">
                        </div>
                    </swiper-slide>

                </swiper>
            </div>
            <div class="product-category">
                <router-link :class="[route.path.includes(category.path) ? 'active' : '', 'category-item']"
                    :to="`/san-pham/${category.path}`" v-for="category in  categories " :key="category.id">
                    <div class="icon">
                        <img :src="category.icon" alt="">
                    </div>
                    <span class="title">
                        {{ category.name }}
                    </span>
                </router-link>
            </div>
            <router-view />
            <div class="product-paginate">
                <paginate :page-count="1" :page-range="2" :margin-pages="2" :click-handler="clickCallback"
                    :prev-text="'Trước'" :next-text="'Sau'" :container-class="'pagination'" :page-class="'page-item'">
                </paginate>
            </div>
        </div>
    </Container>
</template>
<script setup>
import Container from '@/view/common/Container.vue';
import audioIcon from '@/assets/svg/categories/audio.svg'
import mobileIcon from '@/assets/svg/categories/mobile.svg'
import monitorIcon from '@/assets/svg/categories/monitor.svg'
import tabletIcon from '@/assets/svg/categories/tablet.svg'
import watchIcon from '@/assets/svg/categories/watch.svg'
import Card from '@/view/components/Card.vue';
import Filter from './_Filters.vue';
import Paginate from "vuejs-paginate-next";

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useRoute } from 'vue-router';
const route = useRoute()
const modules = [Pagination]
const categories = [
    {
        id: 1,
        name: "Di động",
        icon: mobileIcon,
        path: "dien-thoai",
        value: 'mobile'
    },
    {
        id: 2,
        name: "Máy tính",
        icon: monitorIcon,
        path: "may-tinh-xach-tay",
        value: 'laptop'
    },
    {
        id: 3,
        name: "Đồng hồ",
        icon: watchIcon,
        path: "dong-ho",
        value: 'watch'
    },
    {
        id: 4,
        name: "Phụ kiện",
        icon: audioIcon,
        path: "phu-kien",
        value: 'accessories'
    },

    {
        id: 5,
        name: "Máy tính bảng",
        icon: tabletIcon,
        path: "may-tinh-bang",
        value: 'tablet'
    }
]
const clickCallback = (pageNum) => {
    console.log(pageNum)
}
</script>

<style scoped lang="scss">
.app-product {
    display: flex;
    flex-direction: column;
    gap: 42px;
    background-color: $light-primary;
    padding: 20px 0;
    border-radius: 8px;
    margin-bottom: 40px;

    @include min-sm {
        padding: 20px;

    }

    .product-slider {
        width: 100%;

        .slider-img {
            width: 100%;
            overflow: hidden;

            img {
                width: 100%;
                object-fit: cover;
            }
        }
    }

    .product-category {
        display: flex;
        gap: 32px;
        justify-content: center;
        align-items: center;

        .category-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 16px;
            padding: 5px;
            cursor: pointer;

            .icon {
                height: 25px;
                width: 25px;
                overflow: hidden;

                img {
                    height: 100%;
                    width: 100%;
                    transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
                }

            }

            .title {
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 20px;
                text-align: center;

            }

            &.active {
                border-bottom: 2px solid var(--Primary, #0C68F4);
            }

            &:hover {

                img {
                    transform: scale(1.1);
                }
            }
        }
    }


    .product-similar {}

    .product-paginate {
        align-self: flex-end;
        padding: 24px 20px 60px 20px;

        :deep(.pagination) {
            display: flex;
            gap: 5px;

            .page-item {
                a {
                    padding: 10px 15px;
                    border-radius: 8px;
                    border: 1px solid $blue;
                    font-weight: 500;
                    cursor: pointer;
                    user-select: none;
                }

                &.active,
                &:hover {
                    a {
                        color: $white;
                        background-color: $blue;
                    }
                }

                &.disabled {
                    &:hover {
                        a {
                            background-color: $white;
                            color: $black;
                        }
                    }

                    a {
                        opacity: .5;
                    }
                }
            }
        }
    }


}
</style>