<template>
    <section class="best-seller">
        <section-heading titleText="Bán chạy" navText="View all" navTo="/san-pham/dien-thoai" />
        <div class="product-list" v-if="products">
            <swiper :modules="modules" :slides-per-view="3" :navigation="true" :space-between="24" id="swiper-slider"
                :breakpoints="breakpoints">
                <swiper-slide class="swiper-item" v-for="product in products" :key="product._id">
                    <Card :product="product"/>
                    {{ console.log(product) }}
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import SectionHeading from '@/view/components/SectionHeading.vue';
import Card from '@/view/components/Card.vue';
import { Navigation } from 'swiper/modules';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { ProductsAxiosService } from '@/services/remote/product';

const breakpoints = {
    320: { slidesPerView: 2, spaceBetween: 10 },
    768: { slidesPerView: 2, spaceBetween: 16 },
    1024: { slidesPerView: 4, spaceBetween: 18 },
    1224: { slidesPerView: 5, spaceBetween: 20 },
}
const modules = [Navigation]
const products = ref(null)
onMounted(async () => {
    await ProductsAxiosService.fetchAll({ page: 1, page_size: 12 })
        .then(res => {
            products.value = res.data.products
            console.log(res.data)
        })
        .catch(error => {
            console.log("lỗi")
        });
});
</script>

<style lang="scss">
.best-seller {
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: $light-primary;
    border-radius: 8px;

    .product-list {
        width: 100%;
        padding: 10px;

    }

    #swiper-slider {
        background-color: $light-primary;

        .swiper-button-prev,
        .swiper-button-next {
            z-index: 1;

            &::after {
                background-color: $light-primary;
                font-size: 16px;
                font-weight: 600;
                padding: 10px 15px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                border-radius: 50%;
                color: $gray;

                &:hover {
                    background-color: $red;
                }

            }

            &.swiper-button-disabled {
                display: none;
            }
        }
    }

}
</style>