<script setup lang="ts">
  import { computed, inject, ref } from 'vue';
  import type { Order } from '@/types';
  import { useDateFormatter } from '@/composables/useDateFormatter';
  import { useNumberFormatter } from '@/composables/useNumberFormatter';

  const props = defineProps<{
    order: Order;
  }>();

  const emit = defineEmits<{
    'get-active-order': [order: Order];
  }>();

  const openProductList = inject<boolean>('openProductList');

  const activeItemId = ref(0);

  const { formatDateFull, formatDateNumbers } = useDateFormatter();
  const { formatWithSpaces } = useNumberFormatter();

  function handleActiveItem(order: Order) {
    activeItemId.value = order.id;
    emit('get-active-order', order);
  }

  const fullDate = computed(() => formatDateFull(props.order.date));
  const shortDate = computed(() => formatDateNumbers(props.order.date));

  const isActiveOrder = computed(() => activeItemId.value === props.order.id);

  console.log(isActiveOrder.value);

  const orderTotalPrice = computed(() => {
    let totalUAH = 0;
    let totalUSD = 0;

    props.order.products?.forEach(product => {
      const priceUAH = product.price?.find(p => p.symbol === 'UAH');
      const priceUSD = product.price?.find(p => p.symbol === 'USD');

      totalUAH += priceUAH?.value ?? 0;
      totalUSD += priceUSD?.value ?? 0;
    });

    return {
      totalUAH: formatWithSpaces(totalUAH),
      totalUSD: formatWithSpaces(totalUSD),
    };
  });
</script>

<template>
  <li
    :class="['order-item', { 'order-item_open': openProductList }]"
    @click="handleActiveItem(order)">
    <p class="order-item__title">{{ order.title }}</p>

    <div class="order-item__quantity-box quantity-box">
      <span class="quantity-box__icon">
        <el-icon><Operation /></el-icon>
      </span>

      <div class="quantity-box__quantity">
        <p class="quantity-box__number">{{ order.products?.length ?? 0 }}</p>
        <p class="quantity-box__title">Продукта</p>
      </div>
    </div>

    <div class="order-item__date">
      <p class="order-item__date-short">{{ shortDate }}</p>
      <p class="order-item__date-full">{{ fullDate }}</p>
    </div>

    <div class="order-item__price">
      <p class="order-item__price-usd">{{ orderTotalPrice.totalUSD }} $</p>
      <p class="order-item__price-uah">
        {{ orderTotalPrice.totalUAH }}
        <span>UAH</span>
      </p>
    </div>

    <el-icon v-if="isActiveOrder"><ArrowRightBold /></el-icon>
    <button
      v-else
      class="order-item__delete-btn"
      @click.stop="console.log('test')">
      <el-icon><DeleteFilled /></el-icon>
    </button>
  </li>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .order-item {
    display: grid;
    align-items: center;
    grid-template-columns: minmax(100px, 50%) auto auto auto 30px;
    padding: 10px 15px;
    border: 1px solid $gray;
    border-radius: 5px;
    column-gap: 15px;
    white-space: nowrap;
    cursor: pointer;
    min-width: 380px;

    &_open {
      grid-template-columns: auto auto auto 30px;

      & .order-item__title {
        display: none;
      }
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &__title {
      font-size: 18px;
      font-weight: 500;
      color: $dark-gray;
      text-decoration: underline;
    }

    &__date {
      text-align: center;

      &-short {
        font-size: 12px;
        color: $gray;
      }

      &-full {
        font-size: 14px;
        font-weight: 500;
        color: $dark-gray;
      }
    }

    &__price {
      &-usd {
        font-size: 12px;
        color: $gray;
      }

      &-uah {
        font-size: 14px;
        font-weight: 600;
        color: $dark-gray;

        & > span {
          font-size: 10px;
        }
      }
    }

    &__delete-btn {
      width: 100%;
      height: 100%;
      & > .el-icon {
        font-size: 14px;
        color: $gray;
      }
    }
  }

  .quantity-box {
    display: flex;
    align-items: center;
    column-gap: 15px;

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $gray;
      border-radius: 50%;
      width: 30px;
      height: 30px;
    }

    &__title {
      font-size: 14px;
      color: $gray;
    }

    &__number {
      font-size: 14px;
      font-weight: 600;
      color: $dark-gray;
    }
  }
</style>
