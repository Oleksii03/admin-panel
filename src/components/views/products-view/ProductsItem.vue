<script setup lang="ts">
  import type { Product } from '@/types';
  import { computed } from 'vue';
  import { useDateFormatter } from '@/composables/useDateFormatter';

  const props = defineProps<{
    product: Product;
  }>();

  defineEmits<{
    'delete-product': [id: number];
  }>();

  const { formatDateDefault } = useDateFormatter();

  const guaranteeData = computed(() => {
    const start = formatDateDefault(props?.product?.guarantee?.start);
    const end = formatDateDefault(props?.product?.guarantee?.end);

    return { start, end };
  });

  const productPrice = computed(() => {
    const valueUan = props?.product?.price.find(p => p.symbol === 'UAH')?.value;
    const valueUsd = props?.product?.price.find(p => p.symbol === 'USD')?.value;

    return {
      uan: valueUan,
      usd: valueUsd,
    };
  });
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

    <div class="products-item__guarantee">
      <div class="products-item__guarantee-start">
        <span>c</span>
        <span>{{ guaranteeData.start }}</span>
      </div>
      <div class="products-item__guarantee-end">
        <span>по</span>
        <span>{{ guaranteeData.end }}</span>
      </div>
    </div>

    <div class="products-item__condition">
      <p class="products-item__condition-text">
        {{ product.isNew ? 'Новый' : 'Б / У' }}
      </p>
    </div>

    <div class="products-item__price">
      <p class="products-item__price-usd">{{ productPrice.usd }} $</p>
      <p class="products-item__price-uah">
        {{ productPrice.uan }}
        <span>UAH</span>
      </p>
    </div>

    <div class="products-item__order">
      <p class="products-item__order-name">Приход {{ product.order }}</p>
    </div>

    <button
      class="products-item__delete-btn"
      type="button"
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

    grid-template-columns: 10px 40px minmax(200px, auto) 70px 100px 50px 70px 70px 25px;
    gap: 30px;
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
      font-size: 14px;
      color: $green;
    }

    &__guarantee {
      font-size: 12px;
      color: $gray;

      &-start {
        margin-bottom: 5px;
      }

      &-end,
      &-start {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    &__condition {
      &-text {
        font-size: 12px;
        font-weight: 600;
        color: $dark-gray;
        text-transform: uppercase;
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

    &__order {
      &-name {
        font-size: 14px;
        font-weight: 600;
        color: $dark-gray;
      }
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
