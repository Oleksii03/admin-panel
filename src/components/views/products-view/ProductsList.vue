<script setup lang="ts">
  import type { Product } from '@/types';
  import ProductsItem from './ProductsItem.vue';

  defineProps<{
    products: Product[];
  }>();
</script>

<template>
  <ul class="product-list">
    <ProductsItem
      @delete-product="id => $emit('delete-product', id)"
      v-for="product in products"
      :key="product.id"
      :product="product" />
  </ul>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .product-list {
    display: grid;
    gap: 10px;
    overflow: auto;
  }
</style>
