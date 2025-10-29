<script setup lang="ts">
  import NavigationMenu from '@/components/NavigationMenu/NavigationMenu.vue';
  import TopMenu from '@/components/TopMenu/TopMenu.vue';
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
  }

  main {
    background-color: $blue;
    width: 100%;
  }
</style>
