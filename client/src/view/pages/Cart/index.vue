<template>
  <Container>
    <div class="app-cart">
      <div class="app-navigate">
        Home > Cart
      </div>
      <div class="cart-stepper">
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
      </div>
      <div class="cart-main">
        <div class="product-list">
          <div class="card-product" v-for="n in 3" :key="n">
            <div class="card-image">
              <img src="https://ourdeal.co.uk/wp-content/uploads/2022/02/macprofrontside1.jpg" alt="">
            </div>
            <div class="card-desc">
              <h3 class="title">
                MacBook Pro M2 MNEJ3 2022 LLA
                13.3 inch
              </h3>
              <div class="card-info">
                <ul>
                  <li v-for="n in 3" :key="n">
                    <div class="icon">

                    </div>
                    <div class="text">
                      Black
                    </div>
                  </li>
                </ul>
              </div>
              <div class="card-price">
                <div class="price">
                  <span>Giá:</span>
                  <span>1.200.000VND</span>
                </div>
                <div class="box-quatity">
                  <button class="btn-reduce">
                    <img :src="minusIcon" alt="">
                  </button>
                  <span class="quantity">
                    3
                  </span>
                  <button class="btn-incre">
                    <img :src="plusIcon" alt="">
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="payment-detail">
          <h3 class="title">
            Thanh toán
          </h3>
          <div class="payment-box">
            <div class="payment-top">
              <div class="payment-subtotal">
                <span class="left">
                  Tổng tiền sản phẩm
                </span>
                <span class="right">
                  200.000VND
                </span>
              </div>
              <div class="payment-discount">
                <span class="left">
                  Giảm giá (10%)
                </span>
                <span class="right">
                  20.000VND
                </span>
              </div>
              <div class="payment-ship">
                <span class="left">
                  Phí vận chuyển
                </span>
                <span class="right">
                  16.500VND
                </span>
              </div>
            </div>
            <div class="payment-bottom">
              <div class="left">
                Tổng thanh toán
              </div>
              <div class="right">
                196.000VND
              </div>
            </div>
          </div>
          <div class="payment-btn">
            <button> Tới trang thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "../../common/Container.vue";
import minusIcon from '@/assets/svg/minus.svg'
import plusIcon from '@/assets/svg/plus.svg'
</script>

<style lang="scss" scoped>
.app-cart {
  padding: 10px 20px;
  background-color: $white;
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-radius: 8px;
  margin-bottom: 20px;

  .app-navigate {
    font-style: italic;
    color: $azure;
  }

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
    padding: 32px;

    @include min-lg {
      flex-direction: row;
    }

    .product-list {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-top: 32px;

      .card-product {
        display: flex;
        gap: 24px;
        border: 2px solid $border-section;
        border-radius: 8px;
        padding: 20px;

        .card-image {
          height: 120px;
          width: 120px;
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
          gap: 16px;
          width: 100%;

          .title {
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
          }

          .card-info {
            ul {
              display: flex;
              flex-direction: column;
              gap: 8px;

              li {
                display: flex;
                gap: 5px;
                font-size: 12px;
                align-items: center;
                color: $gray;

                .icon {
                  height: 16px;
                  width: 16px;
                  background-color: $green;
                  border-radius: 50%;

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
                font-weight: 600;

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
              font-weight: 600;
              button {
                align-items: center;
                background-color: #f9f9f9;
                cursor: pointer;
                border: unset;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 5px;
                font-size: 16px;
                border-radius: 4px;
                img{
                  width: 25px;
                  height: 25px;
                }
              }
            }
          }
        }
      }
    }

    .payment-detail {
      width: 400px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding-top: 40px;


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

          &>div {
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
          font-size: 16px;
          font-weight: 600;
          color: $white;
          background-color: $red;
          cursor: pointer;
          font-family: 'Inter';

          &:hover {
            opacity: .8;
          }
        }
      }
    }

  }
}
</style>