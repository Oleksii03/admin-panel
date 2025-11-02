<script setup lang="ts">
  import { onMounted, provide, ref } from 'vue';
  import { useRootStore } from '@/stores/root';
  import { storeToRefs } from 'pinia';
  import type { Order, Product } from '@/types';
  import OrderList from '@/components/views/orders-view/OrderList.vue';
  import ProductsList from '@/components/views/orders-view/ProductsList.vue';

  const rootStore = useRootStore();
  const { orders, isLoading } = storeToRefs(rootStore);

  const activeProductsList = ref<Product[]>([]);
  const activeOrderTitle = ref<string>('');
  const openProductList = ref(false);

  provide('openProductList', openProductList);

  function handleActiveOrder(order: Order) {
    activeProductsList.value = order.products;
    activeOrderTitle.value = order.title;
    openProductList.value = true;
  }

  onMounted(async () => await rootStore.getOrders());
</script>

<template>
  <section class="orders">
    <div class="orders__container container">
      <div class="orders__title-box">
        <el-icon><Plus /></el-icon>

        <h1 class="orders__title">
          Приходы /
          <span>{{ orders.length }}</span>
        </h1>
      </div>

      <div :class="['orders__list-wrapper', { 'orders__list-wrapper_open': openProductList }]">
        <OrderList
          :orders="orders"
          @get-active-order="handleActiveOrder" />

        <ProductsList
          v-if="openProductList"
          :products="activeProductsList"
          :title="activeOrderTitle" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .orders {
    padding-top: 50px;

    &__container.container {
      @media (min-width: $md) {
        padding: 0 80px;
      }
    }

    &__title {
      &-box {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 50px;
      }
    }

    & .el-icon {
      font-size: 14px;
      color: $light;
      background-color: $green;
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }

    &__list-wrapper {
      display: grid;

      &_open {
        grid-template-columns: 40% 60%;
        align-items: start;
        gap: 20px;
      }
    }
  }
</style>
