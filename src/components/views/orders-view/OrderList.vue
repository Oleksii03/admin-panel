<script setup lang="ts">
  import OrderItem from '@/components/views/orders-view/OrderItem.vue';
  import type { Order } from '@/types';
  import { ref } from 'vue';

  defineProps<{
    orders: Order[];
  }>();

  const emit = defineEmits<{
    'get-active-order': [order: Order];
  }>();

  const activeItemId = ref<number | null>(0);

  function handleActiveItem(order: Order) {
    activeItemId.value = order.id;
    emit('get-active-order', order);
  }
</script>

<template>
  <ul class="order-list">
    <OrderItem
      @get-active-order="activeOrder => handleActiveItem(activeOrder)"
      v-for="order in orders"
      :key="order.id"
      :order="order"
      :is-active-order="order.id === activeItemId" />
  </ul>
</template>

<style lang="scss" scoped></style>
