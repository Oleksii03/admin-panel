<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRootStore } from '@/stores/root';
  import { storeToRefs } from 'pinia';
  import ProductFilters from '@/components/views/products-view/ProductFilters.vue';
  import ProductsList from '@/components/views/products-view/ProductsList.vue';

  const rootStore = useRootStore();
  const { products } = storeToRefs(rootStore);

  const getProductsByType = async (type: string) => await rootStore.getProducts(type);

  function deleteProduct(id: number) {
    products.value = products.value.filter(p => p.id !== id);
  }

  onMounted(async () => await rootStore.getProducts(''));
</script>

<template>
  <section class="products">
    <div class="products__container container">
      <div class="products__header">
        <h1 class="products__title">
          Продукты /
          <span>{{ products.length }}</span>
        </h1>

        <ProductFilters @get-products-by-type="getProductsByType" />
      </div>

      <ProductsList
        :products="products"
        @delete-product="deleteProduct" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .products {
    padding-top: 50px;

    &__container.container {
      @media (min-width: $md) {
        padding: 0 80px;
      }
    }

    &__header {
      display: flex;
      align-items: center;
      gap: 25px;
      margin-bottom: 50px;

      & .el-icon {
        font-size: 14px;
        color: $light;
        background-color: $green;
        border-radius: 50%;
        width: 30px;
        height: 30px;
      }
    }
  }
</style>
