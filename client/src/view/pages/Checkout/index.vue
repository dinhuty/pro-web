<template>
  <Container>
    <div class="app-checkout">
      <div class="app-navigate">
        <breadscrumb
          :data="[
            { path: '', name: 'Trang chủ', value: 'home' },
            { path: 'cart', name: 'Giỏ hàng', value: 'cart' },
          ]"
        />
      </div>
      <div class="checkout-main">
        <div class="checkout-user">
          <h2 class="title" @click="clickShow">Địa chỉ giao hàng</h2>
          <div class="box-user">
            <div class="user-name">
              <div class="firt-name">
                <v-text-field
                  v-model="data.firstName"
                  label="Họ"
                  :rules="nameRules"
                ></v-text-field>
              </div>
              <div class="last-name">
                <v-text-field
                  v-model="data.lastName"
                  label="Tên"
                  :rules="nameRules"
                ></v-text-field>
              </div>
            </div>
            <div class="user-number">
              <v-text-field
                v-model="data.phoneNumber"
                label="Số điện thoại"
              ></v-text-field>
            </div>
            <div class="user-address">
              <!-- <h3 class="title">
                    Địa chỉ giao hàng
                </h3> -->
              <div class="address-select">
                <v-select
                  label="Tỉnh/Thành phố"
                  v-model="data.address.city"
                  :items="cities"
                  item-title="name"
                  :return-object="true"
                >
                </v-select>
                <v-select
                  label="Quận/Huyện"
                  v-model="data.address.district"
                  :items="districts"
                  item-title="name"
                  :return-object="true"
                >
                </v-select>
                <v-select
                  label="Xã/Phường"
                  v-model="data.address.ward"
                  :items="wards"
                  item-title="name"
                  :return-object="true"
                >
                </v-select>
              </div>
              <v-text-field
                v-model="data.address.houseNumber"
                label="Số nhà"
              ></v-text-field>
            </div>
          </div>
        </div>
        <div class="checkout-product"></div>
      </div>

      <!-- <div>
                <select id="city" v-model="selectedCity">
                    <option value="" selected>Chọn</option>
                    <option v-for="city in cities" :value="city" :key="city.code">{{ city.name }}</option>
                </select>

                <select id="district" v-model="selectedDistrict">
                    <option value="" selected>Chọn quận huyện</option>
                    <option v-for="district in districts" :value="district" :key="district.code">{{ district.name }}
                    </option>
                </select>

                <select id="ward" v-model="selectedWard">
                    <option value="" selected>Chọn phường xã</option>
                    <option v-for="ward in wards" :value="ward" :key="ward.code">{{ ward.name }}</option>
                </select>

            </div> -->
    </div>
  </Container>
</template>

<script setup>
import Container from "../../common/Container.vue";
import { ref, onMounted, watch, reactive, onBeforeMount } from "vue";
import Breadscrumb from "@/view/components/Breadscrumb.vue";
import axios from "axios";
const host = "https://provinces.open-api.vn/api/";

const data = reactive({
  firstName: null,
  lastName: null,
  address: {
    city: null,
    district: null,
    ward: null,
    houseNumber: null,
  },
  email: null,
  phoneNumber: null,
});
const nameRules = ref([
  (value) => {
    if (value?.length > 3) return true;

    return "Tên phải có ít nhất 3 kí tự";
  },
]);
const clickShow = () => {
  console.log(data);
};

const cities = ref([]);
const districts = ref([]);
const wards = ref([]);

const callAPI = (api, target) => {
  axios.get(api).then((response) => {
    if (target === "city") {
      cities.value = response.data;
    } else if (target === "district") {
      districts.value = response.data.districts;
    } else if (target === "ward") {
      wards.value = response.data.wards;
    }
  });
};
onMounted(() => {
  callAPI(`${host}`, "city");
});

watch(
  () => data.address.city,
  (selectedCity) => {
    console.log(selectedCity);
    districts.value = [];
    data.address.district = "";
    wards.value = [];
    data.address.ward = "";
    if (selectedCity) {
      callAPI(`${host}p/${selectedCity.code}?depth=2`, "district");
    }
  }
);
watch(
  () => data.address.district,
  (selectedDistrict) => {
    wards.value = [];
    data.address.ward = "";
    if (selectedDistrict) {
      callAPI(`${host}d/${selectedDistrict.code}?depth=2`, "ward");
    }
  }
);

onBeforeMount(() => {
  window.addEventListener("error", (e) => {
    if (e) {
      const resizeObserverErrDiv = document.getElementById(
        "webpack-dev-server-client-overlay-div"
      );
      const resizeObserverErr = document.getElementById(
        "webpack-dev-server-client-overlay"
      );
      if (resizeObserverErr)
        resizeObserverErr.className = "hide-resize-observer";
      if (resizeObserverErrDiv)
        resizeObserverErrDiv.className = "hide-resize-observer";
    }
  });
});
</script>

<style lang="scss" scoped >
.app-checkout {
  padding: 20px 0;
  @include min-sm {
    padding: 20px;
  }
  background-color: $light-primary;
  flex-direction: column;
  margin-bottom: 10px;
  border-radius: 8px;
  display: flex;
  gap: 48px;

  .checkout-main {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @include min-lg {
      flex-direction: row;
    }

    .checkout-user {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 24px;
      .title {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
        color: $black;
      }
      .box-user {
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
        @include min-sm {
          padding: 10px 20px;
        }
        //custom input
        :deep(.v-input) {
          .v-field__field {
            background-color: $light-primary;
          }
          .v-field__input {
            font-size: 14px;
          }
          .v-label {
            font-size: 0.8rem;
          }
          input {
            background-color: $light-primary;
          }
          .v-field--focused {
            .v-label.v-field-label {
              opacity: 0.6;
            }
          }
          .v-label.v-field-label--floating {
            top: 0;
          }
          &.v-input--density-default {
            --v-input-control-height: 1.5rem;
            --v-input-padding-top: 5px;
            .v-field--variant-filled {
              --v-input-control-height: 1.5rem;
              --v-input-padding-top: 5px;
            }
          }
        }
        .user-name {
          display: flex;
          gap: 10px;
          & > div {
            width: 100%;
          }
        }
      }
      .user-address {
        display: flex;
        flex-direction: column;
        .title {
          font-size: 15px;
          text-transform: none;
          padding-bottom: 10px;
        }
        .address-select {
          display: flex;
          flex-direction: column;
          gap: 10px;
          @include min-xl {
            flex-direction: row;
          }
        }
      }
    }

    .checkout-product {
      width: 100%;
      background-color: red;
      height: 400px;
      @include min-lg {
        width: 500px;
      }
    }
  }
}
</style>