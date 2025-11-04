<script setup lang="ts">
  import NavigationList from './NavigationList.vue';
</script>

<template>
  <aside class="aside">
    <NavigationList />
  </aside>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .aside {
    padding: 10px;
    width: 250px;
    box-shadow: 8px 0px 8px -4px $gray;
    background-color: $aside-bg-color;
  }
</style>
