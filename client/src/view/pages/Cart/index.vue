<template>
  <Container>
    <div class="app-cart">
      <div class="app-navigate">
        <breadscrumb :data="[{ path: '', name: 'Trang chủ', value: 'home' }]" />
      </div>
      <!-- <div class="cart-stepper">
        <div class="cart-icon">
          <img :src="require('@/assets/svg/cart.svg')" alt="">
          <span>Giỏ hàng</span>
        </div>
        <div class="cart-icon">
          <img :src="require('@/assets/svg/checkout.svg')" alt="">
          <span>Kiểm tra</span>
        </div>
        <div class="cart-icon">
          <img :src="require('@/assets/svg/payment.svg')" alt="">
          <span>Thanh toán</span>
        </div>
      </div> -->
      <div class="cart-main">
        <div class="product-list" v-if="listProduct.length > 0">
          <div
            class="card-product"
            v-for="(item, index) in listProduct"
            :key="index"
          >
            <div class="card-image">
              <img :src="item.product.thumb_url.url" alt="" />
            </div>
            <div class="card-desc">
              <h3 class="title">
                {{ item.product.name }}
              </h3>
              <div class="card-info">
                <ul>
                  <li class="card-info__color">
                    <div class="icon" :style="{ 'font-size': '13px' }">
                      Màu sắc:
                    </div>
                    <div
                      class="text"
                      :style="{
                        'background-color': item.option.color.value,
                        height: '16px',
                        width: '16px',
                        'border-radius': '50%',
                      }"
                    ></div>
                  </li>
                  <li>
                    <div class="icon">
                      <font-awesome-icon icon="mobile" />
                    </div>
                    <div class="text">
                      {{ item.option.attribute.value }}
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card-price">
                <div class="price">
                  <span>Giá:</span>
                  <span>{{
                    formatCurrency(item.option.attribute.price * item.quantity)
                  }}</span>
                </div>
                <div class="box-quatity">
                  <button
                    class="btn-reduce"
                    @click="updateProductQuantity(item.id, 'minus')"
                  >
                    <img :src="minusIcon" alt="" />
                  </button>
                  <span class="quantity">
                    {{ item.quantity }}
                  </span>
                  <button
                    class="btn-incre"
                    @click="updateProductQuantity(item.id, 'plus')"
                  >
                    <img :src="plusIcon" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-list" v-else>Không có sản phẩm nào</div>
        <div class="payment-detail">
          <h3 class="title">Thanh toán</h3>
          <div class="payment-box">
            <div class="payment-top">
              <div class="payment-subtotal">
                <span class="left"> Tổng tiền sản phẩm </span>
                <span class="right">
                  {{ formatCurrency(totalPrice) }}
                </span>
              </div>
              <div class="payment-discount">
                <span class="left"> Giảm giá (0%) </span>
                <span class="right"> 0đ </span>
              </div>
              <div class="payment-ship">
                <span class="left"> Phí vận chuyển </span>
                <span class="right"> 0đ </span>
              </div>
            </div>
            <div class="payment-bottom">
              <div class="left">Tổng thanh toán</div>
              <div class="right">
                {{ formatCurrency(totalPrice) }}
              </div>
            </div>
          </div>
          <div class="payment-btn">
            <button>Tới trang thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "../../common/Container.vue";
import minusIcon from "@/assets/svg/minus.svg";
import plusIcon from "@/assets/svg/plus.svg";
import { useStore } from "vuex";
import { computed, onMounted, watchEffect } from "vue";
import { formatCurrency } from "@/utils/formatCurrency";
import { CartAction } from "@/store/modules/cart/types.actions";
import { useRouter } from "vue-router";
import Breadscrumb from "@/view/components/Breadscrumb.vue";

const router = useRouter();
const store = useStore();
const totalPrice = computed(() => {
  return store.getters["cart/totalPrice"];
});
const listProduct = computed(() => {
  return store.getters["cart/cartItems"];
});
const updateProductQuantity = (id, type) => {
  store.dispatch(`cart/${CartAction.UPDATE_CART_ITEM_QUANTITY}`, { id, type });
};
</script>

<style lang="scss" scoped>
.app-cart {
  padding: 20px 20px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 8px;
  margin-bottom: 20px;

  .cart-stepper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: -2px;

    .cart-icon {
      display: flex;
      flex-direction: column;
      height: 48px;
      gap: 5px;
      align-items: flex-start;

      img {
        height: 100%;
      }

      span {
        font-size: 13px;
      }

      &:first-child {
        height: 60px;
        color: $azure;
      }

      &:nth-child(2) span {
        align-self: center;
      }

      &:nth-child(3) span {
        align-self: flex-end;
      }
    }
  }

  .cart-main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px 32px;

    @include min-lg {
      flex-direction: row;
    }

    .product-list {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 16px;

      .card-product {
        display: flex;
        gap: 24px;
        border: 1px solid $border-section;
        border-radius: 8px;
        padding: 10px;

        .card-image {
          height: 100px;
          width: 100px;
          align-self: center;

          img {
            height: 100%;
            width: 100%;
            object-fit: contain;
          }
        }

        .card-desc {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;

          .title {
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
          }

          .card-info {
            ul {
              display: flex;
              flex-direction: column;
              gap: 8px;
              color: $gray;
              font-weight: 400;

              li {
                display: flex;
                gap: 5px;
                font-size: 12px;
                align-items: center;

                .icon {
                  font-size: 12px;
                }
              }
            }
          }

          .card-price {
            display: flex;
            justify-content: space-between;

            .price {
              display: flex;
              gap: 5px;

              span {
                font-weight: 500;

                &:last-child {
                  color: $red;
                }
              }
            }

            .box-quatity {
              display: flex;
              gap: 10px;
              justify-items: center;
              align-items: center;
              font-weight: 400;
              font-size: 13px;

              button {
                align-items: center;
                background-color: #f9f9f9;
                cursor: pointer;
                border: unset;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                border-radius: 4px;

                img {
                  width: 20px;
                  height: 20px;
                }
              }
            }
          }
        }
      }
    }

    .payment-detail {
      width: 450px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-top: 10px;

      @include min-lg {
        width: 380px;
      }
      .title {
        font-size: 18px;
        font-weight: 600;
      }

      .payment-box {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .payment-top {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding-bottom: 16px;
          border-bottom: 1px solid $border-section;

          & > div {
            display: flex;
            justify-content: space-between;
            color: $gray;

            .left {
              font-size: 14px;
              font-weight: 500;
            }

            .right {
              font-weight: 400;
            }
          }
        }

        .payment-bottom {
          display: flex;
          justify-content: space-between;

          .left {
            font-size: 16px;
            font-weight: 600;
          }

          .right {
            font-size: 16px;
            font-weight: 600;
            color: $red;
          }
        }
      }

      .payment-btn {
        button {
          width: 100%;
          height: 100%;
          border: unset;
          padding: 15px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 500;
          color: $white;
          background-color: $red;
          cursor: pointer;
          font-family: "Inter";

          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>