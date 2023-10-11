<template>
    <footer class="footer">
        <Container>
            <div class="footer-top">
                <div class="footer-left">
                    <div class="title">
                        Thông tin về Electric
                    </div>
                    <div class="list-info">
                        <span>
                            Địa chỉ:
                            <p>Km10 - Giao Thủy - Nam Định</p>
                        </span>
                        <span>
                            Giới thiệu
                        </span>
                        <span>
                            Tuyển dụng
                        </span>
                        <span>
                            Hỗ trợ
                        </span>
                    </div>
                </div>
                <div class="footer-center">
                    <div class="title">
                        <h5>Tổng đài hỗ trợ:</h5>
                    </div>
                    <div class="list-info">
                        <p>
                            <span>
                                CSKH:
                            </span>
                            <a href="#">
                                1900.9191
                            </a>
                        </p>
                        <p>
                            <span>
                                Bảo hành:
                            </span>
                            <a href="#">
                                1900.8888
                            </a>
                        </p>
                    </div>
                </div>
                <div class="footer-right">
                    <div class="title">
                        <h5>Chấp nhận thanh toán:</h5>
                    </div>
                    <div class="list-info">
                        <img v-for="payment in payments" :key="payment.name" :src="payment.img" alt="">
                    </div>
                </div>
            </div>
        </Container>
        <Container>
            <div class="footer-copyright">
                <h4 class="footer-title">
                    Liên hệ với chúng tôi
                </h4>
                <div class="footer-content">
                    <div class="social-list">
                        <div class="social-item" v-for="social in socials" :key="social.name">
                            <img :src="social.img" alt="">
                        </div>
                    </div>
                    <div class="footer-logo">
                        <img src="https://theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=1532" alt="">
                    </div>
                </div>
            </div>
        </Container>
    </footer>
</template>

<script setup>
import Container from '@/view/common/Container.vue';
import facebook from '@/assets/svg/socials/fb.svg'
import messager from '@/assets/svg/socials/messager.svg'
import vk from '@/assets/svg/socials/vk.svg'
import tiktok from '@/assets/svg/socials/tiktok.svg'
import youtube from '@/assets/svg/socials/youtube.svg'

import visa from '@/assets/images/payments/visa.png'
import paypal from '@/assets/images/payments/paypal.png'
import master_card from '@/assets/images/payments/master_card.png'

const socials = [
    {
        name: "faceook",
        img: facebook
    },
    {
        name: "messager",
        img: messager,
    },
    {
        name: 'vk',
        img: vk
    },
    {
        name: 'tiktok',
        img: tiktok
    },
    {
        name: 'youtube',
        img: youtube
    }
]
const payments = [
    {
        name: "visa",
        img: visa
    },
    {
        name: "payal",
        img: paypal,
    },
    {
        name: 'master_card',
        img: master_card
    }
]
</script>

<style scoped lang="scss">
.footer {
    display: flex;
    flex-direction: column;
    gap: 12px;
    background-color: $light-primary;
    padding: 30px 0;

    .footer-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 30px 10px;
        flex-direction: column;
        gap: 40px;


        @include min-sm {
            display: flex;
            justify-content: space-between;
            padding-bottom: 30px;
            flex-direction: row;
        }

        .footer-left,
        .footer-center {
            .title {
                font-size: 16px;
                font-weight: 600;
                padding-bottom: 20px;
            }

            .list-info {
                display: flex;
                font-size: 14px;
                flex-direction: column;
                gap: 12px;

                a {
                    font-weight: 600;
                    color: $azure;
                }

                span {
                    cursor: pointer;
                    font-weight: 600;

                    @include min-sm {
                        font-weight: 500;
                    }

                    p {
                        color: $azure;
                    }

                    &:hover {
                        color: $azure;
                    }
                }
            }
        }

        .footer-right {
            .title {
                font-size: 16px;
                font-weight: 500;
            }
            .list-info{
                display: flex;
                gap: 10px;
                padding-top: 16px;
                img{
                    height: 32px;
                    width: auto;
                }
            }
        }
    }

    .footer-copyright {
        display: flex;
        align-items: flex-start;
        border-top: 1px solid $border-section;
        padding: 20px;
        flex-direction: column;
        gap: 16px;

        @include min-sm {
            flex-direction: row;
            gap: 40px;
            align-items: center;
            padding: 20px 5px;
        }

        .footer-title {
            font-size: 14px;
            font-weight: 400;
            white-space: nowrap;

            @include min-sm {
                font-size: 16px;
                font-weight: 500;
                white-space: nowrap;
            }
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            .social-list {
                display: flex;
                gap: 16px;

                .social-item {
                    height: 24px;
                    width: 24px;
                    overflow: hidden;

                    @include min-sm {
                        height: 32px;
                        width: 32px;
                        overflow: hidden;
                    }

                    img {
                        width: 100%;
                    }
                }

            }

            .footer-logo {
                height: 24px;

                @include min-sm {
                    height: 40px;
                }

                img {
                    height: 100%;
                }
            }
        }
    }
}
</style>