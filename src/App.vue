<script setup lang="ts">
  import MainLayout from './layouts/MainLayout.vue';
</script>

<template>
  <div>
    <MainLayout>
      <RouterView v-slot="{ Component }">
        <Transition
          name="route-fade"
          mode="out-in"
          appear>
          <KeepAlive>
            <component :is="Component" />
          </KeepAlive>
        </Transition>
      </RouterView>
    </MainLayout>
  </div>
</template>

<style>
  .route-fade-enter-active,
  .route-fade-leave-active {
    transition: opacity 180ms ease;
    will-change: opacity;
  }

  .route-fade-enter-from,
  .route-fade-leave-to {
    opacity: 0;
  }
</style>
