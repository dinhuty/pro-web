<!-- eslint-disable -->
<template>
    <div class="product-mobile">
        <div class="product-filter">
            <div class="filter-heading">
                <div class="title">
                    Lọc
                </div>
                <div class="btn" @click="resetSelected">
                    Xóa hết
                </div>
            </div>
            <div class="filter-options">
                <div class="filter">
                    <span class="title">
                        Thương hiệu
                    </span>
                    <div class="options">
                        <div class="option">
                            <input type="radio" v-model="selected.brand" id="all" value="">
                            <label for="all">Tất cả</label>
                        </div>
                        <div class="option" v-for="brand in brands" :key="brand.value">
                            <input type="radio" v-model="selected.brand" :id="brand.value" :name="brand.type"
                                :value="brand.value">
                            <label :for="brand.value">{{ brand.displayName }}</label>
                        </div>
                    </div>
                </div>
                <div class="option-drive"></div>
                <div class="filter">
                    <span class="title">
                        Bộ nhớ
                    </span>
                    <div class="options">
                        <div class="option">
                            <input type="radio" v-model="selected.option" id="allOption" value="">
                            <label for="allOption">Tất cả</label>
                        </div>
                        <div class="option" v-for="option in options" :key="option.value">
                            <input type="radio" v-model="selected.option" :id="option.value" :name="option.type"
                                :value="option.value">
                            <label :for="option.value">{{ option.displayName }}</label>
                        </div>
                    </div>
                </div>
                <div class="option-drive"></div>
                <div class="filter">
                    <span class="title">
                        Giá tiền
                    </span>
                    <div class="options">
                        <div class="option">
                            <input type="radio" v-model="selected.price" id="allPirce" value=''>
                            <label for="allPrice">Tất cả</label>
                        </div>
                        <div class="option" v-for="price in prices" :key="price.value">
                            <input type="radio" v-model="selected.price" :id="price.value" :name="price.type"
                                :value="price.value">
                            <label :for="price.value">{{ price.displayName }}</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-list">
            <div class="box-sort">
                <select v-model="selected.sort">
                    <option disabled selected value="">Sắp xếp</option>
                    <option value="0">Thấp đến cao</option>
                    <option value="1">Cao đến thấp</option>
                </select>
            </div>
            <div class="product-grid" v-if="products.length > 0">
                <Card v-for="(product, index) in products" :key="index" :product="product" category="dien-thoai" />
            </div>
            <div v-else class="blank-product">
                <span>
                    "Không có sản phẩm nào"
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */
// eslint-disable vue/no-v-model-argument
// eslint-disable
import Card from '@/view/components/Card.vue';
import Filter from '../_Filters.vue';
import Paginate from "vuejs-paginate-next";
import { brands, options, prices } from '@/utils/filter/mobileFilter'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { onBeforeMount, watchEffect, watch, onMounted, ref, reactive } from 'vue';
import { useStore } from 'vuex';
import { ProductAction } from '@/store/modules/product/types.actions'
import { useRoute, useRouter } from 'vue-router';

const store = useStore();
const products = ref([]);
const route = useRoute()
const router = useRouter()
const selected = reactive({
    brand: '',
    option: '',
    price: '',
    sort: ''
})
const resetSelected = () => {
    selected.brand = '';
    selected.option = '';
    selected.price = '';
};


onBeforeMount(() => {
    const { brand, option, price, sort } = route.query;
    if (brand) {
        selected.brand = brand;
    }
    if (option) {
        selected.option = option;
    }
    if (price) {
        selected.price = price;
    } 
    if (sort) {
        selected.sort = sort;
    }
});
watch([() => selected.brand
    , () => selected.option
    , () => selected.price
    , () => selected.sort]
    , async ([newBrand, newOption, newPrice, sort]) => {
        const query = {};
        if (newBrand) {
            query.brand = newBrand;
        }
        if (newOption) {
            query.option = newOption;
        }
        if (newPrice) {
            query.price = newPrice;
        }
        if (sort) {
            query.sort = sort;
        }
        router.replace({ query });
        try {
            // await store.dispatch(`product/${ProductAction.remote.FETCH_MOBILE}`, { category: 'mobile', query: selected });
            // products.value = store.getters['product/products'];
        } catch (error) {
            console.log("Can't call api")
        }
    });
onMounted(async () => {
    try {
        // await store.dispatch(`product/${ProductAction.remote.FETCH_MOBILE}`, { category: 'mobile', query: selected });
        // products.value = store.getters['product/products'];
        
    } catch (error) {
        console.log("Can't call api")
    }
});
watchEffect(() => {
    console.log(selected.brand);
});


const modules = [Pagination]
</script>

<style lang="scss" scoped>
.product-mobile {
    display: flex;
    gap: 20px;

    .product-filter {
        display: none;

        @include min-lg {
            display: block;
            width: 200px;

        }

        @include min-lg {
            width: 250px;
        }

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

            .filter {
                display: flex;
                flex-direction: column;
                gap: 24px;
                padding: 20px 0;

                .title {
                    font-size: 16px;
                }

                .options {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    .option {
                        cursor: pointer;
                        display: flex;
                        gap: 16px;
                        font-weight: 400;
                        font-size: 14px;
                        align-items: center;

                        input {
                            height: 16px;
                            width: 16px;

                        }

                        &:hover {
                            font-weight: 500;
                        }
                    }
                }
            }

            .option-drive {
                width: 100%;
                height: 1px;
                background-color: $border-section;
            }
        }
    }

    .product-list {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 16px;

        @include min-sm {
            gap: 24px;

        }

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
            grid-template-columns: repeat(2, 1fr);

            @include min-sm {
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
            }

            @include min-lg {
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
            }

            @include min-xl {
                grid-template-columns: repeat(4, 1fr);
                gap: 20px;
            }
        }

        .blank-product {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 80px;
        }
    }

}
</style>