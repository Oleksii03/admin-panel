<script setup lang="ts"></script>

<template>
  <div class="logo">
    <el-icon class="logo__icon"><UserFilled /></el-icon>
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
      position: relative;
      width: 30px;
      height: 35px;
      background-color: $green;
      border-radius: 5px 5px 50% 50%;
      color: $light;
    }

    &__text {
      color: $green;
      text-transform: uppercase;
      font-weight: 600;
      line-height: 1.2;
    }
  }
</style>
