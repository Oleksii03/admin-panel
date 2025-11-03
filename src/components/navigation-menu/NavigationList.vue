<script setup lang="ts">
  import type { INavigationMenuItem } from '@/types/router/navigation-menu';
  import NavigationItem from './NavigationItem.vue';

  const asideList: INavigationMenuItem[] = [
    {
      name: 'Приход',
      path: '/orders',
    },
    {
      name: 'Продукты',
      path: '/products',
    },
    {
      name: 'Настройки',
      path: '/settings',
    },
  ];
</script>

<template>
  <ul class="aside-list">
    <NavigationItem
      v-for="{ name, path } in asideList"
      :key="path"
      :name="name"
      :path="path" />
  </ul>
</template>

<style lang="scss" scoped>
  .aside-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    margin-top: 50px;
  }
</style>
