<template>
  <div class="account-payment">
    <div class="list-payment">
      <h1 class="payment-title">Tài khoản thanh toán</h1>
      <div class="blank">Thiết lập thông tin thanh toán</div>
      <div class="payment-add">
        <button>Thêm tài khoản thanh toán</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Container from "@/view/common/Container.vue";
import Breadscrumb from "@/view/components/Breadscrumb.vue";
</script>

<style lang="scss" scoped>
.account-payment {
  display: flex;
  flex-direction: column;
  gap: 42px;
  .payment-title {
    font-size: 15px;
    font-weight: 500;
    line-height: 120%;
  }
  .list-payment {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
    .blank {
      font-style: italic;
      font-size: 13px;
      color: $gray;
      padding-left: 10px;
    }
    .payment-add {
      button {
        background-color: $bg-light-gray;
        width: auto;
        padding: 12px 16px;
        color: $gray;
        border-radius: 8px;
        cursor: pointer;
      }
    }
  }
}
</style>