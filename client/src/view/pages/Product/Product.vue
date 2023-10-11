<template>
    <Container class="app-product">
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
            <div class="category-item active" v-for="category in categories" :key="category.id">
                <div class="icon">
                    <img :src="category.icon" alt="">
                </div>
                <span class="title">
                    {{ category.name }}
                </span>
            </div>
        </div>
        <div class="product-main">
            <div class="product-filter">
                <div class="filter-heading">
                    <div class="title">
                        Lọc
                    </div>
                    <div class="btn">
                        Xóa hết
                    </div>
                </div>
                <div class="filter-options">
                    <Filter title="Thương hiệu" />
                    <div class="option-drive"></div>
                    <Filter title="Màu sắc" />
                    <div class="option-drive"></div>
                    <Filter title="Giá tiền" />

                </div>
            </div>
            <div class="product-list">
                <div class="box-sort">
                    <select>
                        <option disabled selected value="default">Sắp xếp</option>
                        <option value="new">Mới nhất</option>
                        <option value="0">Giá thấp nhất</option>
                        <option value="1">Giá cao nhất</option>
                    </select>
                </div>
                <div class="product-grid">
                    <Card v-for="(card, index) in 12" :key="index" />
                </div>
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

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = [Pagination]
const categories = [
    {
        id: 1,
        name: "Phụ kiện",
        icon: audioIcon
    },
    {
        id: 2,
        name: "Di động",
        icon: mobileIcon
    },
    {
        id: 3,
        name: "Màn hình",
        icon: monitorIcon
    },
    {
        id: 4,
        name: "Máy tính bảng",
        icon: tabletIcon
    },
    {
        id: 5,
        name: "Đồng hồ",
        icon: watchIcon
    }
]
</script>

<style scoped lang="scss">
.app-product {
    display: flex;
    flex-direction: column;
    gap: 42px;
    background-color: $light-primary;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 40px;
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

    .product-main {
        display: flex;
        gap: 20px;

        .product-filter {
            width: 300px;
            padding: 16px;

            .filter-heading {
                padding: 10px 0;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .title {
                    font-size: 18px;
                    font-weight: 600;
                }

                .btn {
                    color: $azure;
                    font-size: 13px;
                    font-style: italic;
                    cursor: pointer;

                    &:hover {
                        opacity: .7;
                    }
                }
            }

            .filter-options {
                display: flex;
                flex-direction: column;
                gap: 16px;

                .option-drive {
                    width: 100%;
                    height: 2px;
                    background-color: $border-section;
                }
            }
        }

        .product-list {
            flex: 1;
            display: flex;
            flex-direction: column;
            gap: 24px;

            .box-sort {
                align-self: flex-end;

                select {
                    padding: 5px 10px;
                    border: 1px solid $border-section;
                    border-radius: 8px;
                    font-size: 14px;
                    color: $gray;

                    &:focus {
                        outline: unset;
                    }

                    option {
                        border: 1px solid #ccc;
                        line-height: 20px;
                    }
                }
            }

            .product-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
            }
        }

    }
    .product-similar{
        
    }
}
</style>