<template>
  <div class="breadscrumb">
    <ol>
      <li class="breadscrumb-item" v-for="item in data" :key="item.value">
        <router-link class="breadscrumb-name" :to="`/${item.path}`">
          {{ item.name }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script setup>
defineProps({
  data: Array,
});
</script>

<style lang="scss" scoped>
.breadscrumb {
  ol {
    display: flex;
    gap: 5px;
    font-weight: 400;
    .breadscrumb-item {
      color: gray;
      &::before {
        content: ">";
        padding-right: 5px;
        color: $gray;
      }
      &:first-child::before {
        content: "";
        padding: 0;
      }
      &:last-child {
        color: $blue;
      }
    }
  }
}
</style>