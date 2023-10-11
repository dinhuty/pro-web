<template>
    <div class="app-header">
        <Container class="header-container">
            <div class="header-left">
                <span>
                    Electronic
                </span>
            </div>
            <div class="header-center">
                <div class="header-search">
                    <input type="text" placeholder="Bạn cần tìm gì?">
                </div>
            </div>
            <div class="header-right">
                <div class="header-right-box" v-for="item in menuItems" :key="item.value">
                    <div class="box-icon">
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
                </div>
            </div>
        </Container>
        <div class="sub-header">
            <Container class="sub-main">
                <div class="menu-item" v-for="sub in subs" :key="sub.id">
                    <div class="icon">
                        <font-awesome-icon :icon="sub.icon" />
                    </div>
                    <span>{{ sub.name }}</span>
                </div>
            </Container>
        </div>
    </div>
</template>
<script setup>
import Container from '@/view/common/Container.vue';
import { ref, onMounted } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const subs = ref([
    {
        id: 1,
        name: "Điện thoại",
        icon: "mobile"
    },
    {
        id: 2,
        name: "Máy tính",
        icon: "laptop"
    },
    {
        id: 3,
        name: "Phụ kiện",
        icon: "laptop"
    },
    {
        id: 4,
        name: "Đồng hồ",
        icon: "laptop"
    },
    {
        id: 5,
        name: "Linh kiện",
        icon: "laptop"
    },
    {
        id: 4,
        name: "Đồng hồ",
        icon: "calendar"
    },
    {
        id: 5,
        name: "Linh kiện",
        icon: "laptop"
    },
])
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
    {
        value: "signin",
        icon: "fa-regular fa-user",
        fText: "Đăng",
        lText: "nhập",
        path: "/",
    }
])
const scrollPosition = ref(0);
onMounted(() => {

    const subHeader = document.querySelector('.sub-header');

    if (subHeader) {
        window.addEventListener('scroll', handleScroll);
    }

    function handleScroll() {
        scrollPosition.value = window.scrollY;
        if (scrollPosition.value >= 80) {
            subHeader.classList.add('hidden-sub-header');
        } else {
            subHeader.classList.remove('hidden-sub-header');
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
        font-family: 'Odibee Sans', cursive;
        font-size: 35px;
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
        gap: 20px;

        &-box {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
        }

        .box-icon {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
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
        background-color: $red;
        color: $white;

        .sub-main {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
            color: $white;
        }

        .menu-item {
            height: 100%;
            cursor: pointer;
            display: flex;
            gap: 10px;
            align-items: center;
            .icon {
                font-size: 14px;
            }

            span {
                font-size: 15px;
                text-transform: uppercase;
            }
        }

        &.hidden-sub-header {
            display: none;
        }
    }

}
</style>