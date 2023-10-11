<template>
    <Container>
        <div class="product-detail">
            <div class="app-navigate">
                Sản phẩm > Máy tính
            </div>
            <div class="product-name">
                <p>MacBook Pro M2 MNEJ3 2022 LLA 13.3 inch</p>
            </div>
            <div class="product-main">
                <div class="product-swiper">
                    <swiper :spaceBetween="10" :navigation="true" :thumbs="computedThumbs" :modules="modules"
                        class="swiper-view">

                        <swiper-slide class="swiper-img">
                            <img :src="ip14demo" />
                        </swiper-slide>
                        <swiper-slide class="swiper-img">
                            <img :src="ip13demo" />
                        </swiper-slide>
                        <swiper-slide class="swiper-img">
                            <img :src="ip15demo" />
                        </swiper-slide>
                    </swiper>
                    <swiper @swiper="setThumbsSwiper" :navigation="true" :spaceBetween="10" :slidesPerView="8"
                        :freeMode="true" :watchSlidesProgress="true" :modules="modules" class="swiper-slider">

                        <swiper-slide class="swiper-img">
                            <img :src="ip14demo" />
                        </swiper-slide>
                        <swiper-slide class="swiper-img">
                            <img :src="ip13demo" />
                        </swiper-slide>
                        <swiper-slide class="swiper-img">
                            <img :src="ip15demo" />
                        </swiper-slide>

                    </swiper>
                </div>
                <div class="product-info">

                    <div class="product-rating">
                        <div class="rating">
                            <span class="title">
                                Đánh giá:
                            </span>
                            <span>
                                4.9
                            </span>
                            <font-awesome-icon icon="star" />
                        </div>
                        <div class="sold">
                            Sold 125
                        </div>
                    </div>
                    <div class="product-options">
                        <div class="option-specs">
                            <div class="title">
                                Bộ nhớ:
                            </div>
                            <div class="spec active">
                                8G/128G
                            </div>
                            <div class="spec">
                                8G/256G
                            </div>
                            <div class="spec">
                                12G/512G
                            </div>

                        </div>
                        <div class="option-colors">
                            <h3 class="title">
                                Màu sắc:
                            </h3>
                            <div :class="[n === 1 ? 'color' : 'color', n === 1 ? 'active' : '']" v-for="n in 3" :key="n">
                            </div>
                        </div>
                    </div>
                    <div class="product-benefit">
                        <div class="icon">
                            <LottieAnimation :animation-data="couponIcon" :auto-play="true" :loop="true" :speed="1"
                                ref="anim" />
                        </div>
                        <h3 class="title">
                            <span>Khuyến mãi:</span>
                        </h3>
                        <div class="desc-coupon">
                            <ul>
                                <li>
                                    Tặng phiếu mua hàng trị giá 500k
                                </li>
                                <li>
                                    Tặng phiếu mua hàng trị giá 500k
                                </li>
                                <li>
                                    Tặng phiếu mua hàng trị giá 500k
                                </li>
                                <li>
                                    Tặng phiếu mua hàng trị giá 500k
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="product-accept-payment">
                        <h3 class="title">
                            Thanh toán:
                        </h3>
                        <ul>
                            <li>
                                Giảm 5% khi thanh toán với VNPay
                            </li>
                            <li>
                                Thanh toán khi nhận hàng
                            </li>
                        </ul>
                    </div>
                    <div class="product-btn">
                        Mua ngay
                    </div>
                </div>
            </div>
            <div class="product-desc-technical">
                <div class="title">
                    Thông số kỹ thuật
                </div>
                <div class="desc">
                    <ul class="technical">
                        <li v-for="n in 8" :key="n">
                            <span>Màn hình</span>
                            <div>OLED6.1"Super Retina XDR OLED6.1</div>
                        </li>
                    </ul>
                    <div class="introduce">
                        <span>Giới thiệu</span>
                        <p>iPad Air 5 M1 Wifi 64 GB đã được công bố tại sự kiện Peek Performance diễn ra hôm 9/3 (theo giờ
                            Việt Nam). Năm nay Apple đã có những thay đổi lớn về cả hiệu năng và bổ sung màu sắc mới cho
                            thiết bị.</p>
                        <p>iPad Air 5 M1 Wifi 64 GB có thiết kế phẳng ở 4 cạnh, mặt sau được làm từ nhôm với nhiều màu sắc
                            tươi trẻ. Đặc biệt, năm nay Apple đã bổ sung màu tím cho dòng iPad Air 5 M1 Wifi 64 GB, màu sắc
                            này sẽ gây ấn tượng mạnh khi chúng ta cầm máy sử dụng. Màn hình của máy cũng được làm phẳng với
                            kích thước 10.9 inch.</p>
                    </div>
                </div>
            </div>
            <div class="product-similar">
                <section-heading titleText="Sản phẩm tương tự" navText="View all" navTo="/product" />
                <swiper :modules="modules" :slides-per-view="4.5" :navigation="true" :space-between="24" id="swiper-slider"
                    :breakpoints="breakpoints">
                    <swiper-slide class="swiper-item" v-for="n in 12" :key="n">
                        <Card />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="product-comment">
                <div class="title">
                    Bình luận
                </div>
                <form action="">
                    <input type="text" placeholder="Nhận xét sản phẩm" class="form-text">
                    <input type="submit" class="form-btn" value="Bình luận">
                </form>
                <div class="comment-list">
                    <div class="comment-item" v-for="n in 5" :key="n">
                        <div class="name">
                            Đặng Ngọc Hoàng
                        </div>
                        <div class="content">
                            <p>This macbook air at first feels just so big to me using it for school, and after a while, it
                                felt as a perfect size. I look at it sometimes and realize how portable and small it is, but
                                IT FEELS AS BIG AS LIKE A TV SCREEN. It's not a huge computer, but when your doing work and
                                typing or whatever watching youtube it feels like a movie screen, beautiful. I never had
                                such a good computer that just feels like a breath of fresh air. If you are contemplating on
                                buying one, I would get 512 GB of storage and 16 ram. You will not be disappointed if you
                                buy this no matter what, I strongly recommend it.</p>
                        </div>
                        <span class="time">
                            May 8, 2023
                        </span>
                        <div class="box-btn">
                            <button>
                                Thích
                            </button>
                            <button>
                                Trả lời
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
</template>

<script setup>
import Container from "@/view/common/Container.vue";
import Card from '@/view/components/Card.vue'
import SectionHeading from '@/view/components/SectionHeading.vue'
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import ip15demo from '@/assets/images/ip15.jpg'
import ip14demo from '@/assets/images/ip14.jpg'
import ip13demo from '@/assets/images/ip13.jpg'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { LottieAnimation } from "lottie-web-vue"
import couponIcon from '@/assets/json/coupon.json'

const thumbsSwiper = ref(null);
let anim = ref()
const setThumbsSwiper = (swiper) => {
    thumbsSwiper.value = swiper;
};
const computedThumbs = computed(() => {
    if (thumbsSwiper && !thumbsSwiper.destroyed) {
        return { swiper: thumbsSwiper.value };
    } else {
        return null;
    }
});
const breakpoints = {
    320: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 16 },
    1024: { slidesPerView: 4, spaceBetween: 18 },
    1224: { slidesPerView: 5, spaceBetween: 20 },
}
const modules = [FreeMode, Navigation, Thumbs]
</script>

<style lang="scss" >
.product-detail {
    background-color: $light-primary;
    width: 100%;
    padding: 20px 0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 40px;

    @include min-sm {
        padding: 20px;
    }

    .app-navigate {
        color: $blue;
    }

    .product-name {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        padding-bottom: 16px;
        border-bottom: 1px solid $border-section;
    }

    .product-main {
        display: flex;
        gap: 24px;
        width: 100%;
        flex-direction: column;

        @include min-lg {
            flex-direction: row;
        }

        .product-swiper {
            user-select: none;
            width: 100%;
            background-color: $light-primary;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
            cursor: pointer;
            border-radius: 8px;
            overflow: hidden;

            @include min-lg {
                width: 60%;
            }

            .swiper-button-prev,
            .swiper-button-next {
                &.swiper-button-disabled {
                    display: none;
                }
            }

            .swiper-button-prev:after,
            .swiper-button-next:after {
                padding: 10px;
                font-size: 20px;
                border-radius: 10px;
                font-weight: 600;
                background-color: $light-primary;
                color: $gray;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

                &:hover {
                    color: red !important;
                }
            }

            .swiper-view {
                .swiper-img {
                    display: flex;
                    align-items: center;
                }

                width: 100%;

                img {
                    width: 100%;
                }
            }


            .swiper-slider {
                display: flex;
                align-items: center;
                max-width: 100%;
                // width: 100%;


                // .swiper-wrapper {
                //     display: flex;
                //     justify-content: center !important;
                // }

                .swiper-img {
                    cursor: pointer;
                    height: 80px;
                    width: 80px !important;
                    padding: 5px;
                    border-radius: 8px;
                    overflow: hidden;
                    border: 1px solid $border-section;

                    img {
                        height: 100%;
                        width: 100%;
                        object-fit: contain;
                    }
                }
            }
        }

        .product-info {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 32px;

            @include min-lg {
                width: 40%;
            }

            .product-rating {
                display: flex;
                gap: 32px;
                font-size: 14px;

                .rating {
                    display: flex;
                    gap: 5px;
                    font-weight: 600;
                    color: $orange;

                    .title {
                        color: $black;
                    }
                }

                .sold {
                    color: $gray;
                }
            }

            .product-desc-short {
                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
            }
        }

        .product-options {
            display: flex;
            flex-direction: column;
            gap: 24px;

            .option-specs {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;

                .title {
                    align-self: center;
                    font-weight: 600;
                }

                .spec {
                    padding: 10px;
                    border-radius: 8px;
                    border: 2px solid $border-section;
                    cursor: pointer;
                    transition: all .3s cubic-bezier(0.19, 1, 0.22, 1);

                    &:hover,
                    &.active {
                        border: 2px solid $red;
                    }
                }
            }

            .option-colors {
                display: flex;
                flex-wrap: wrap;
                gap: 16px;

                .title {
                    align-self: center;
                    font-weight: 600;
                }

                .color {
                    height: 35px;
                    width: 35px;
                    border-radius: 50%;
                    background-color: $azure;
                    cursor: pointer;

                    &:hover,
                    &.active {
                        border: 2px solid $green;
                    }
                }

            }

        }

        .product-benefit {
            display: flex;
            gap: 16px;
            flex-direction: column;
            background-color: $light-blue;
            padding: 20px;
            border-radius: 10px;
            position: relative;

            .icon {
                position: absolute;
                width: 80px;
                top: -35px;
                left: -10px;
            }

            .title {
                font-size: 16px;
                font-weight: 600;
            }

            .desc-coupon {
                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
            }
        }

        .product-accept-payment {
            border: 1px solid $gray;
            padding: 10px 20px;
            border-radius: 8px;
            background-color: $light-bg-secondary;

            .title {
                font-size: 16px;
                font-weight: 600;
                line-height: 150%;
            }

            ul {
                li {
                    line-height: 150%;
                    font-size: 14px;
                }
            }
        }

        .product-btn {
            background-color: $red;
            color: $white;
            font-size: 16px;
            font-weight: 600;
            padding: 22px;
            cursor: pointer;
            border-radius: 8px;
            text-align: center;

            &:hover {
                opacity: .8;
            }
        }
    }

    .product-desc-technical {
        display: flex;
        gap: 24px;
        flex-direction: column;

        .title {
            font-size: 16px;
            font-weight: 600;
            color: $blue;
        }

        .desc {
            display: flex;
            flex-direction: column;
            gap: 32px;

            @include min-sm {
                flex-direction: row;
            }

            .technical {
                @include min-sm {
                    width: 50%;
                }



                li {
                    padding: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;

                    @include min-lg {
                        flex-direction: row;
                        gap: 0;

                        span {
                            overflow: hidden;
                            width: 140px;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            font-weight: 600;

                        }

                        div {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            line-height: 20px;
                        }
                    }


                }

                li:nth-child(odd) {
                    background-color: #f5f5f5;
                }
            }

            .introduce {
                span {
                    font-size: 25px;
                    font-weight: 600;
                    padding-bottom: 20px;
                }

                display: flex;
                flex-direction: column;
                gap: 5px;

                p {
                    line-height: 150%;
                }

                @include min-sm {
                    width: 50%;
                }
            }
        }
    }

    .product-similar {

        .swiper-button-prev:after,
        .swiper-button-next:after {
            background-color: $white;
            font-size: 16px;
            font-weight: 600;
            padding: 10px 15px;
            box-shadow: $box-shadow-prd;
            border-radius: 50%;
            color: $gray;
        }

    }

    .product-comment {
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding: 30px;

        .title {
            font-size: 22px;
            font-weight: 600;
        }

        form {
            width: 100%;
            display: flex;
            gap: 24px;

            @include min-lg {
                padding: 0 50px;

            }

            input {
                border: unset;
                padding: 15px;
                font-size: 16px;

            }

            .form-text {
                width: 100%;
                border-bottom: 1px solid $border-section;

                &:focus {
                    outline: none;
                    border-bottom: 1px solid $blue;
                }
            }

            .form-btn {
                border-radius: 8px;
                background-color: $white;
                color: $blue;
                border: 2px solid $blue;
                cursor: pointer;

                &:hover {
                    opacity: .8;
                }
            }

        }

        .comment-list {
            display: flex;
            flex-direction: column;
            gap: 24px;

            @include min-lg {
                padding: 32px 100px 32px 32px;
            }

            .comment-item {
                display: flex;
                flex-direction: column;
                gap: 8px;

                .name {
                    font-size: 16px;
                    font-weight: 600;
                }

                .content {
                    padding-left: 10px;
                    font-weight: 400;

                    p {
                        text-indent: 20px;
                        font-size: 14px;
                        line-height: 150%;
                    }
                }

                .time {
                    font-size: 13px;
                    font-weight: 500;
                    font-style: italic;
                    color: $gray;
                    align-self: flex-end;
                }

                .box-btn {
                    display: flex;
                    gap: 12px;
                    align-self: flex-end;

                    button {
                        border: none;
                        background-color: $white;
                        font-weight: 600;
                        cursor: pointer;

                        &:hover {
                            color: $blue;
                        }
                    }
                }
            }
        }
    }
}</style>