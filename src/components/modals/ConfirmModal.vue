<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  import noScroll from 'no-scroll';
  import type { IDeletionOrderData } from '@/components/views/orders-view/OrderItem.vue';

  defineProps<{
    orderData: IDeletionOrderData | null;
  }>();

  defineEmits<{
    close: [];
    delete: [id: number];
  }>();

  onMounted(() => noScroll.on());
  onUnmounted(() => noScroll.off());
</script>

<template>
  <div class="modal">
    <button
      @click="$emit('close')"
      class="modal__close-btn"
      type="button">
      <el-icon><Close /></el-icon>
    </button>

    <div class="modal__content">
      <h3 class="modal__title">Ви уверены, что хотите удалить этот приход?</h3>

      <div class="modal__body">
        <p class="modal__body-title">Приход: {{ orderData?.orderId }}</p>
        <p class="modal__body-usd">Сумма заказа USD: {{ orderData?.totalUSD }}</p>
        <p class="modal__body-amount">Количество товаров: {{ orderData?.amount }}</p>
        <p class="modal__body-uah">Сумма заказа UAH: {{ orderData?.totalUAH }}</p>
      </div>

      <div class="modal__footer">
        <button
          @click="$emit('close')"
          class="modal__footer-btn modal__footer-btn_cancel"
          type="button">
          Отменить
        </button>

        <button
          @click="orderData && $emit('delete', orderData.orderId)"
          class="modal__footer-btn modal__footer-btn_delete"
          type="button">
          <el-icon><DeleteFilled /></el-icon>
          Удалить
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 500px;
    background-color: $light;
    border-radius: 4px;
    z-index: 1000;

    &__title {
      font-size: 14px;
      font-weight: 600;
      padding: 20px;
      letter-spacing: 1px;
      border-bottom: 1px solid $gray;
    }

    &__body {
      padding: 20px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      font-size: 14px;
      font-weight: 600;
    }

    &__footer {
      padding: 20px;
      display: flex;
      gap: 10px;
      justify-content: flex-end;
      background-color: $green;

      &-btn {
        padding: 10px 20px;
        border-radius: 25px;
        line-height: normal;
        font-size: 10px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 5px 5px 13px -6px rgba(0, 0, 0, 0.77);

        &_cancel {
          color: $light;
        }

        &_delete {
          background-color: $light;
          color: $red;
        }
      }
    }

    &__close-btn {
      position: absolute;
      top: -14px;
      right: -14px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: $light;
      border-radius: 50%;
      box-shadow: 5px 5px 13px -6px rgba(0, 0, 0, 0.77);
      cursor: pointer;

      & > .el-icon {
        font-size: 18px;
        color: $gray;
      }
    }
  }
</style>
