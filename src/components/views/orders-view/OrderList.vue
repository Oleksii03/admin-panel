<script setup lang="ts">
  import OrderItem from '@/components/views/orders-view/OrderItem.vue';
  import type { Order } from '@/types';

  defineProps<{
    orders: Order[];
  }>();
</script>

<template>
  <ul class="order-list">
    <OrderItem
      @get-active-order="activeOrder => $emit('get-active-order', activeOrder)"
      v-for="order in orders"
      :key="order.id"
      :order="order" />
  </ul>
</template>

<style lang="scss" scoped></style>
