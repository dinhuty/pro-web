<template>
  <div class="app-header">
    <Container class="header-container">
      <router-link to="/" class="header-left">
        <span> Electronic </span>
      </router-link>
      <div class="header-center">
        <div class="header-search">
          <input type="text" placeholder="Bạn cần tìm gì?" />
        </div>
      </div>
      <div class="header-right">
        <router-link
          to="/cart"
          class="header-right-box"
          v-for="item in menuItems"
          :key="item.value"
        >
          <div
            class="box-icon"
            :data-total-product="
              item.value === 'cart' ? '(' + totalProduct + ')' : null
            "
          >
            <font-awesome-icon :icon="item.icon" />
          </div>
          <div class="box-text">
            <span>
              {{ item.fText }}
            </span>
            <span>
              {{ item.lText }}
            </span>
          </div>
        </router-link>
        <div
          class="header-right-box"
          v-if="!store.getters['auth/isLoggedIn']"
          @click.stop="handleModalLogin"
        >
          <div class="box-icon">
            <font-awesome-icon icon="fa-regular fa-user" />
          </div>
          <div class="box-text">
            <span> Đăng </span>
            <span> nhập </span>
          </div>
        </div>
        <router-link to="/account" class="header-right-box" v-else>
          <div class="box-icon">
            <font-awesome-icon icon="fa-regular fa-user" />
          </div>
          <div class="box-text">
            <span> Tài </span>
            <span> Khoản </span>
          </div>
        </router-link>
      </div>
    </Container>
    <div class="sub-header">
      <Container class="sub-main">
        <router-link
          :to="`${sub.path}`"
          class="menu-item"
          v-for="sub in subs"
          :key="sub.id"
        >
          <div class="icon">
            <font-awesome-icon :icon="sub.icon" />
          </div>
          <span>{{ sub.name }}</span>
        </router-link>
      </Container>
    </div>
  </div>
</template>
<script setup>
import Container from "@/view/common/Container.vue";
import { ref, onMounted, computed } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const handleModalLogin = () => {
  if (store.getters["auth/isLoggedIn"]) {
    router.push("/cart");
    return;
  }
  store.dispatch("common/OPEN_MODAL_LOGIN");
};
const totalProduct = computed(() => {
  return store.getters["cart/getTotalProduct"];
});
const subs = ref([
  {
    id: 1,
    name: "Điện thoại",
    icon: "mobile",
    path: "/san-pham/dien-thoai",
  },
  {
    id: 2,
    name: "Máy tính",
    icon: "laptop",
    path: "/san-pham/may-tinh-xach-tay",
  },
  {
    id: 3,
    name: "Đồng hồ",
    icon: "calendar",
    path: "/san-pham/dong-ho",
  },
  {
    id: 4,
    name: "Phụ kiện",
    icon: "mobile",
    path: "/san-pham/phu-kien",
  },
  {
    id: 5,
    name: "Máy tính bảng",
    icon: "laptop",
    path: "/san-pham/may-tinh-bang",
  },
]);
const menuItems = ref([
  {
    value: "help",
    icon: "headset",
    fText: "Hotline",
    lText: "1900.9999",
    path: "/",
  },
  {
    value: "order",
    icon: "calendar",
    fText: "Tra cứu",
    lText: "đơn hàng",
    path: "/",
  },
  {
    value: "cart",
    icon: "cart-plus",
    fText: "Giỏ",
    lText: "hàng",
    path: "/",
  },
]);
const scrollPosition = ref(0);
onMounted(() => {
  const subHeader = document.querySelector(".sub-header");

  if (subHeader) {
    window.addEventListener("scroll", handleScroll);
  }

  function handleScroll() {
    scrollPosition.value = window.scrollY;
    if (scrollPosition.value >= 80) {
      subHeader.classList.add("hidden-sub-header");
    } else {
      subHeader.classList.remove("hidden-sub-header");
    }
  }
});
</script>
<style scoped lang="scss">
.app-header {
  height: 80px;
  width: 100%;
  background-color: $red;
  color: $light-primary;
  position: fixed;
  z-index: 99;

  .header-container {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 20px;
  }

  .header-left {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Odibee Sans", cursive;
    font-size: 35px;
    cursor: pointer;
  }

  .header-center {
    flex: 1;

    .header-search {
      input {
        font-size: 15px;
        height: 42px;
        overflow: visible;
        padding: 8px 50px 8px 15px;
        background: $light-primary;
        margin: 0;
        width: 100%;
        display: inline-block;
        border-radius: 4px;
        border: unset;

        &:focus {
          outline: unset;
        }
      }
    }
  }

  .header-right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &-box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      padding: 5px 10px;
      cursor: pointer;

      &:last-child {
        background-color: rgba(133, 0, 0, 0.447);
        border-radius: 8px;

        &:hover {
          opacity: 0.8;
        }
      }
    }

    .box-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;

      &::after {
        content: attr(data-total-product);
        font-size: 13px;
      }
    }

    .box-text {
      font-size: 13px;
      display: none;

      @include min-lg {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
    }
  }

  .sub-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: $white;
    color: $black;

    .sub-main {
      display: flex;
      justify-content: center;
      gap: 70px;
      align-items: center;
      padding: 0 20px;
      color: $black;
      font-weight: 500;
    }

    .menu-item {
      height: 100%;
      cursor: pointer;
      display: flex;
      gap: 10px;
      align-items: center;

      .icon {
        font-size: 11px;
      }

      span {
        font-size: 12px;
        text-transform: uppercase;
      }
      &:hover{
        color: $azure;
        font-weight: 500;
      }
    }

    &.hidden-sub-header {
      display: none;
    }
  }
}
</style>