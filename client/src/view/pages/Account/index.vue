<template>
  <Container>
    <div class="app-account">
      <div class="app-navigate" v-if="activeRoute">
        <breadscrumb
          :data="[
            { path: '', name: 'Trang chủ', value: 'home' },
            { path: 'account', name: 'Tài khoản', value: 'account' },
            {
              path: activeRoute.path,
              name: activeRoute.name,
              value: activeRoute.value,
            },
          ]"
        />
      </div>
      <div class="account-main">
        <div class="account-sidebar">
          <div class="header-info">
            <div class="user-avatar">
              <img :src="require('@/assets/svg/account-user.svg')" alt="" />
            </div>
            <div class="user-name">
              <span> Dinh Tran </span>
            </div>
          </div>
          <div class="sidebar-main">
            <router-link
              :to="`/account/${item.path}`"
              :class="[
                route.path.includes(item.path) ? 'active' : '',
                'sidebar-item',
              ]"
              v-for="item in sidebarItems"
              :key="item.value"
            >
              <div class="icon">
                <img :src="item.icon" :alt="item.value" />
              </div>
              <div class="name">
                {{ item.name }}
              </div>
            </router-link>
            <div class="sidebar-item logout">
              <div class="icon">
                <img
                  :src="require('@/assets/svg/sidebar/logout.svg')"
                  :alt="logout"
                />
              </div>
              <div class="name">Đăng xuất</div>
            </div>
          </div>
        </div>
        <div class="account-outlet">
          <router-view />
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from "@/view/common/Container.vue";
import Breadscrumb from "@/view/components/Breadscrumb.vue";
import discountIcon from "@/assets/svg/sidebar/discount.svg";
import userIcon from "@/assets/svg/sidebar/user.svg";
import helpIcon from "@/assets/svg/sidebar/help.svg";
import notificationIcon from "@/assets/svg/sidebar/notification.svg";
import orderIcon from "@/assets/svg/sidebar/order.svg";
import wishlistIcon from "@/assets/svg/sidebar/wishlist.svg";
import paymentIcon from "@/assets/svg/sidebar/payment.svg";
import { onBeforeMount, ref, watch } from "vue";
import { useRoute } from "vue-router";
const sidebarItems = [
  {
    name: "Thông tin cá nhân",
    value: "profile",
    icon: userIcon,
    path: "profile",
  },
  {
    name: "Tài khoản thanh toán",
    value: "payment",
    icon: paymentIcon,
    path: "payment",
  },
  {
    name: "Đơn đặt hàng",
    value: "order",
    icon: orderIcon,
    path: "order",
  },
  {
    name: "Sản phẩm yêu thích",
    value: "wishlist",
    icon: wishlistIcon,
    path: "wish-list",
  },
  {
    name: "Voucher",
    value: "voucher",
    icon: discountIcon,
    path: "voucher",
  },
  {
    name: "Thông báo",
    value: "notification",
    icon: notificationIcon,
    path: "notification",
  },
  {
    name: "Hỗ trợ",
    value: "help",
    icon: helpIcon,
    path: "help",
  },
];
const activeRoute = ref({});
const route = useRoute();

onBeforeMount(() => {
  activeRoute.value = sidebarItems.find((item) =>
    route.path.includes(item.path)
  );
  watch(
    () => route.path,
    (newPath) => {
      activeRoute.value = sidebarItems.find((item) =>
        newPath.includes(item.path)
      );
    }
  );
});
</script>

<style lang="scss" scoped>
.app-account {
  padding: 20px 0;
  @include min-sm {
    padding: 20px;
  }
  color: $black;
  margin-bottom: 10px;
  background-color: $light-primary;
  border-radius: 8px;
  display: flex;
  gap: 40px;
  flex-direction: column;
  .account-main {
    display: flex;
    flex-direction: row;
    gap: 10px;
    .account-sidebar {
      background-color: $sidebar-bg;
      border-radius: 8px;
      padding-right: 2px;
      height: auto;
      .header-info {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px 24px 16px;
        .user-avatar {
          height: 45px;
          width: 45px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .user-name {
          font-size: 14px;
          font-weight: 600;
          color: $black;
        }
      }
      .sidebar-main {
        display: flex;
        flex-direction: column;
        .sidebar-item {
          padding: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-sizing: border-box;
          border-left: 2px solid transparent;
          color: $gray;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
          .icon {
            opacity: 0.6;
          }
          &.active,
          &:hover {
            border-left: 2px solid $azure;
            color: $azure;
            .icon {
              opacity: 1;
            }
          }
          &.logout {
            color: $red;
            padding: 10px 16px;
            border-radius: 8px;
            &:hover {
              border-left: 2px solid transparent;
              color: $red;
              background-color: rgba(255, 6, 6, 0.34);

              .icon {
                opacity: 1;
              }
            }
            .icon {
              opacity: 1;
            }
            background-color: rgba(255, 6, 6, 0.123);
          }
        }
      }
    }
    .account-outlet {
      flex: 1;
      //   background-color: red;
      margin-top: 24px;
      padding: 0px 16px;
    }
  }
}
</style>