<script setup lang="ts">
  import type { Product } from '@/types';
  import ProductsItem from './ProductsItem.vue';

  defineProps<{
    products: Product[];
    title: string;
  }>();
</script>

<template>
  <div class="products">
    <div class="products__header">
      <h2 class="products__title">{{ title }}</h2>

      <div class="products__add-product">
        <el-icon><Plus /></el-icon>

        <p class="products__add-product-title">Добавить продукт</p>
      </div>
    </div>

    <ul class="products__list">
      <ProductsItem
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .products {
    border: 1px solid $gray;
    border-radius: 4px;

    &__title {
      margin-bottom: 15px;
    }

    &__header {
      padding: 15px 20px;
    }

    &__add-product {
      display: flex;
      align-items: center;
      column-gap: 10px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      color: $green;
    }

    & .el-icon {
      font-size: 14px;
      color: $light;
      background-color: $green;
      border-radius: 50%;
      width: 20px;
      height: 20px;
    }
  }
</style>
