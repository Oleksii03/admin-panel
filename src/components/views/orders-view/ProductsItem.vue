<script setup lang="ts">
  import type { Product } from '@/types';

  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <li :class="['products-item', { new: product.isNew }]">
    <div class="products-item__active"></div>

    <div class="products-item__img-wrapper">
      <img
        class="products-item__img"
        :src="product.photo"
        :alt="product.title" />
    </div>

    <div class="products-item__info">
      <p class="products-item__info-title">
        {{ product.title }} /
        <span>{{ product.specification }}</span>
      </p>

      <p class="products-item__info-sn">
        SN -
        {{ product.serialNumber }}
      </p>
    </div>

    <p class="products-item__status">Свободен</p>

    <button
      class="products-item__delete-btn"
      @click.stop="console.log('test')">
      <el-icon><DeleteFilled /></el-icon>
    </button>
  </li>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .products-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 5px 25px;
    border-top: 1px solid $gray;

    &.new {
      background-color: $light;
    }

    &__active {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $green;
      flex-shrink: 0;
    }

    &__img {
      width: 40px;
      height: 40px;
    }

    &__info {
      &-title {
        font-size: 14px;
        font-weight: 600;
        color: $dark-gray;
      }

      &-sn {
        font-size: 12px;
        color: $gray;
      }
    }

    &__status {
      margin-left: auto;
      font-size: 14px;
      color: $green;
    }

    &__delete-btn {
      margin-left: 100px;
      width: 30px;
      height: 30px;
      flex-shrink: 0;

      & > .el-icon {
        font-size: 14px;
        color: $gray;
      }
    }
  }
</style>
