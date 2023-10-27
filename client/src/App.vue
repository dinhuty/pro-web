<template>
  <div class="app">
    <router-view />
    <div :class="[isModalLogin ? 'show' : '', 'app-modal', 'fade']"
      :style="{ 'display': isModalLogin ? 'block' : 'none' }" @click="handleCloseModalLogin">
      <div class="modal-dialog">
        <div class="content" @click.stop="">
          <login />
        </div>
      </div>
    </div>
    <div :class="[isModalRegister ? 'show' : '', 'app-modal', 'fade']"
      :style="{ 'display': isModalRegister ? 'block' : 'none' }" @click="handleCloseModalRegister">
      <div class="modal-dialog">
        <div class="content" @click.stop="">
          <register />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Container from '@/view/common/Container.vue'
import { computed } from 'vue'
import { useStore } from 'vuex';
import Login from '@/view/pages/Auth/Login'
import Register from '@/view/pages/Auth/Register'
const store = useStore()
const isModalLogin = computed(() => {
  return store.getters['common/isModalLogin']
})
const isModalRegister = computed(() => {
  return store.getters['common/isModalRegister']
})

const handleCloseModalLogin = () => {
  store.dispatch('common/CLOSE_MODAL_LOGIN')
}
const handleCloseModalRegister = () => {
  store.dispatch('common/CLOSE_MODAL_REGISTER')
}

</script>

<style lang="scss">
.app {
  width: 100%;
  position: relative;

  @include min-sm {
    background-color: $light-bg;
  }

  &-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1005;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: rgba($color: #000000, $alpha: 0.5);
    display: none;


    .modal-dialog {
      max-width: calc(600px - 2rem);
      margin: 1rem;
      position: relative;
      display: flex;
      align-items: center;
      min-height: calc(100% - 2rem);

      &::before {
        height: calc(100vh - 3.5rem);
      }

      @media (min-width: 624px) {
        margin: 1.75rem auto;
        min-height: calc(100% - 3.5rem);
      }


    }

    &.fade .modal-dialog {

      transition: all .3s ease-out;
      transform: translate(0, -150px);
    }

    &.show .modal-dialog {
      transform: translate(0);
    }


    .content {
      z-index: 1;
      width: 100%;
      background-color: white;
      overflow-y: auto;
      border-radius: 10px;
      padding: 1.5rem;
    }
  }
}
</style>
