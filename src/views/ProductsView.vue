<script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRootStore } from '@/stores/root';
  import { storeToRefs } from 'pinia';

  const rootStore = useRootStore();
  const { products } = storeToRefs(rootStore);

  onMounted(async () => await rootStore.getProducts());
</script>

<template>
  <section class="products">
    <div class="products__container container">
      <div class="products__title-box">
        <el-icon><Plus /></el-icon>

        <h1 class="products__title">
          Товары /
          <span>{{ products.length }}</span>
        </h1>
      </div>
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
