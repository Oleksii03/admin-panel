<script setup lang="ts">
  import type { Product } from '@/types';

  defineProps<{
    product: Product;
  }>();

  defineEmits<{
    'delete-product': [id: number];
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

    <p>fdfdffdf</p>

    <button
      class="products-item__delete-btn"
      @click.stop="$emit('delete-product', product.id)">
      <el-icon><DeleteFilled /></el-icon>
    </button>
  </li>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .products-item {
    display: grid;
    align-items: center;

    grid-template-columns: 10px 40px minmax(200px, auto) 100px 100px 3ch;
    gap: 20px;
    padding: 5px 25px;
    border: 1px solid $gray;

    &.new {
      background-color: $light;
      box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.39);
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
        margin-bottom: 5px;
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
      margin-left: auto;
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
