<script setup lang="ts"></script>

<template>
  <div class="logo">
    <div class="logo__icon"></div>
    <div class="logo__text">inventory</div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/styles/utils/variables.scss' as *;

  .logo {
    display: flex;
    align-items: center;
    margin-right: 150px;
    column-gap: 15px;

    &__icon {
      width: 40px;
      height: 40px;
      background-color: $green;
      border-radius: 50%;
    }

    &__text {
      color: $green;
      text-transform: uppercase;
      font-weight: 600;
      line-height: 1.2;
    }
  }
</style>
