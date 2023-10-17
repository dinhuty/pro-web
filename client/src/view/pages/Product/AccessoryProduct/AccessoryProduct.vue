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
                        Thể loại
                    </span>
                    <div class="options">
                        <div class="option">
                            <input type="radio" v-model="selected.category" id="all" value="">
                            <label for="all">Tất cả</label>
                        </div>
                        <div class="option" v-for="category in accessoryCategory" :key="category.id">
                            <input type="radio" v-model="selected.category" :id="category.value" :name="category.value"
                                :value="category.value">
                            <label :for="category.value">{{ category.name }}</label>
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
import { accessoryCategory } from '@/utils/filter/accessoryFilter'
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
    category: ''
})
const resetSelected = () => {
    selected.category = '';
};


onBeforeMount(() => {
    const { category } = route.query;
    if (category) {
        selected.category = category;
    }
});
watch([() => selected.category]
    , async ([category]) => {
        const query = {};
        if (category) {
            query.category = category;
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