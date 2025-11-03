<script setup lang="ts">
  defineProps<{
    isVisible: boolean;
  }>();

  defineEmits<{
    close: [];
  }>();
</script>

<template>
  <Teleport to="main">
    <div
      :class="['backdrop', { visible: isVisible }]"
      @click.self="$emit('close')">
      <slot />
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
  .backdrop {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    transition: opacity 0.3s ease-in-out;
    opacity: 0;
    pointer-events: none;

    &.visible {
      opacity: 1;
      pointer-events: auto;
    }
  }
</style>
