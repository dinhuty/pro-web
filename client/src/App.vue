<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import Container from '@/view/common/Container.vue'
export default {
  name: 'App',
  components: {
    Container
  }
}
</script>

<style lang="scss">
.app {
  width: 100%;

  @include min-sm {
    background-color: $light-bg;
  }
}
</style>
