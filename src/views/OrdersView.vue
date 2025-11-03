<script setup lang="ts">
  import { onMounted, provide, ref } from 'vue';
  import { useRootStore } from '@/stores/root';
  import { storeToRefs } from 'pinia';
  import type { Order, Product } from '@/types';
  import type { IDeletionOrderData } from '@/components/views/orders-view/OrderItem.vue';
  import OrderList from '@/components/views/orders-view/OrderList.vue';
  import ProductsList from '@/components/views/orders-view/ProductsList.vue';
  import OrderListSkeleton from '@/components/views/orders-view/OrderListSkeleton.vue';
  import BackdropView from '@/components/ui/BackdropView.vue';
  import ConfirmModal from '@/components/modals/ConfirmModal.vue';

  const rootStore = useRootStore();
  const { orders, isLoading } = storeToRefs(rootStore);

  const activeProductsList = ref<Product[]>([]);
  const activeOrderTitle = ref('');
  const openProductList = ref(false);
  const isBackdropVisible = ref(false);
  const confirmModalData = ref<IDeletionOrderData | null>(null);

  function openActiveOrder(order: Order) {
    activeProductsList.value = order.products;
    activeOrderTitle.value = order.title;
    openProductList.value = true;
  }

  function closeActiveOrder() {
    activeProductsList.value = [];
    activeOrderTitle.value = '';
    openProductList.value = false;
  }

  function deleteProduct(id: number) {
    activeProductsList.value = activeProductsList.value.filter(product => product.id !== id);
  }

  function handleDeletionOrderData(orderData: IDeletionOrderData) {
    confirmModalData.value = orderData;
    isBackdropVisible.value = true;
  }

  function deleteOrder(id: number) {
    orders.value = orders.value.filter(order => order.id !== id);
    closeModalWindow();
  }

  const closeModalWindow = () => (isBackdropVisible.value = false);

  provide('openProductList', openProductList);

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

      <BackdropView
        @close="closeModalWindow"
        :is-visible="isBackdropVisible">
        <ConfirmModal
          :order-data="confirmModalData"
          @close="closeModalWindow"
          @delete="deleteOrder" />
      </BackdropView>

      <OrderListSkeleton v-if="isLoading" />

      <div
        v-else
        :class="['orders__list-wrapper', { 'orders__list-wrapper_open': openProductList }]">
        <OrderList
          :orders="orders"
          @get-active-order="openActiveOrder"
          @get-deletion-order-data="handleDeletionOrderData" />

        <ProductsList
          v-if="openProductList"
          @close-active-order="closeActiveOrder"
          @delete-product="deleteProduct"
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
