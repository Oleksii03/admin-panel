<script setup lang="ts">
  import NavigationMenu from '@/components/navigation-menu/NavigationMenu.vue';
  import TopMenu from '@/components/top-menu/TopMenu.vue';
</script>

<template>
  <TopMenu />

  <div class="wrapper">
    <NavigationMenu />

    <main class="main">
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .wrapper {
    display: flex;
    height: calc(100dvh - 63px);
  }

  main {
    position: relative;
    background-color: $blue;
    width: 100%;
  }
</style>
