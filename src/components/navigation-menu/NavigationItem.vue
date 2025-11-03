<script setup lang="ts">
  import type { INavigationMenuItem } from '@/types/router/navigation-menu';

  defineProps<INavigationMenuItem>();
</script>

<template>
  <li class="aside-item">
    <router-link :to="path">
      <span>{{ name }}</span>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .aside-item {
    & > a {
      position: relative;
      text-transform: uppercase;
      color: $dark;
      font-weight: 600;

      &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: $green;
        opacity: 0;
        transition: opacity 200ms ease-in-out;
      }
    }

    & .router-link-active {
      &::after {
        opacity: 1;
      }
    }
  }
</style>
