<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRootStore } from '@/stores/root';
  import { storeToRefs } from 'pinia';
  import OrderList from '@/components/views/orders-view/OrderList.vue';

  const rootStore = useRootStore();
  const { orders, isLoading } = storeToRefs(rootStore);

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

      <OrderList :orders="orders" />
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
  }
</style>
