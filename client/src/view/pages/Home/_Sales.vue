<template>
    <section class="sales">

        <div class="sales__box">
            <div class="sales__title">
                <span class="title">
                    Products On Sale
                </span>
                <span class="sub__title">
                    Shop Now!
                </span>
            </div>
            <div class="sales__time">
                <span class="h">
                    12
                </span>
                <span class="icon">
                    :
                </span>
                <span class="h">
                    47
                </span>
                <span class="icon">
                    :
                </span>
                <span class="h">
                    22
                </span>
            </div>
            <button class="sales__button">
                View All
            </button>
        </div>
        <div class="sales__content">
            <swiper :modules="modules" :slides-per-view="4.5" :space-between="24" id="sales__swiper-slider"
                :breakpoints="breakpoints">
                <swiper-slide class="swiper-item" v-for="n in 6" :key="n">
                    <div class="card">
                        <div class="card__img">
                            <img :src="require('@/assets/images/prd.png')" alt="">
                        </div>
                        <div class="card__desc">
                            <div class="card__title">
                                <p>
                                    Logitech G502 Gaming Mouse
                                </p>
                            </div>
                            <div class="card__price">
                                <div class="card__price--old">
                                    $38.00
                                </div>
                                <div class="card__price--new">
                                    $30.00
                                </div>
                            </div>
                        </div>
                        <span class="card__discount">
                            -30%
                        </span>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="sales__nav-btn">
                <button class="btn-prev" @click="handleSlidePrev">
                    <font-awesome-icon icon="angle-left" />
                </button>
                <button class="btn-next" @click="handleSlideNext">
                    <font-awesome-icon icon="angle-right" />
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


const handleSlideNext = () => {
    const swiper = document.getElementById('sales__swiper-slider').swiper;
    swiper.slideNext();
};

const handleSlidePrev = () => {
    const swiper = document.getElementById('sales__swiper-slider').swiper;
    swiper.slidePrev();
};

const breakpoints = {
    325: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 3, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 16 },
    1224: { slidesPerView: 4.5, spaceBetween: 24 },
};
const modules = [Navigation]
</script>

<style lang="scss">
.sales {
    height: 325px;
    width: 100%;
    background-color: #063A88;
    border-radius: 8px;
    color: $light-primary;
    display: flex;

    &__box {
        width: 325px;
        height: 100%;
        padding: 76px 32px;
        align-items: center;
        display: none;

        @include min-lg {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

    &__title {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;

        .title {
            font-size: 24px;
            font-weight: 500;
            line-height: normal;
        }

        .sub__title {
            font-size: 20px;
            font-weight: 300;
            line-height: 28px;
        }
    }

    &__button {
        background-color: transparent;
        border: none;
        color: white;
        font-size: 16px;
        font-style: italic;
        font-weight: 300 !important;
    }

    &__content {
        width: 100%;
        padding: 0 16px;
        position: relative;

        @include min-lg {
            padding: 0 16px 0 0;
            width: calc(100% - 325px);
        }

        @include min-xl {
            padding: 0;
        }

        .sales__nav-btn {
            position: absolute;
            z-index: 10;
            bottom: 8px;
            right: 16px;
            display: flex;
            gap: 5px;
            padding: 2px;

            @include min-lg {
                right: 8px;
            }

            button {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 15px;
                height: 25px;
                width: 25px;
                border-radius: 50%;
                border: 0;
                cursor: pointer;
                color: #063A88;

            }
        }
    }

    #sales__swiper-slider {
        padding: 44px 0;

    }

    .card {
        display: flex;
        position: relative;
        width: 100%;
        height: 237px;
        padding: 8px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;
        background-color: $light-primary;
        border-radius: 8px;

        &__img {
            width: 100%;
            height: 168px;
            display: flex;
            justify-content: center;

            img {
                height: 100%;
                object-fit: contain;
            }
        }

        &__desc {
            display: flex;
            height: 55px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 8px;
            flex-shrink: 0;
            align-self: stretch;

            .card__title {
                overflow: hidden;
                color: var(--Black, #0C0C0C);
                font-size: 12px;
                font-style: normal;
                font-weight: 500;
                line-height: normal;

                p {
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    /* Số dòng tối đa bạn muốn hiển thị */
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                }
            }

            .card__price {
                display: flex;
                justify-content: space-between;
                width: 100%;

                &--old {
                    color: $gray;
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    text-decoration-line: line-through;
                }

                &--new {
                    color: $red;
                    text-align: right;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: normal;
                }
            }
        }

        &__discount {
            position: absolute;
            display: flex;
            padding: 4px 6px;
            align-items: center;
            gap: 10px;
            left: 0;
            top: 8px;
            font-size: 14px;
            border-radius: 0px 8px 8px 0px;
            background: var(--primary-secondary-secondary-100, #FDDBC9);
            color: var(--primary-secondary-secondary-400, #F45E0C);
        }
    }
}
</style>