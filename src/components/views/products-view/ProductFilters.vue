<script lang="ts" setup>
  import { ref } from 'vue';

  const type = ref('');

  const options = [
    {
      type: 'Monitors',
      label: 'Monitors',
    },
    {
      type: 'Laptops',
      label: 'Laptops',
    },
    {
      type: 'Mobile-Phones',
      label: 'Mobile Phones',
    },
  ];
</script>

<template>
  <el-select
    v-model="type"
    filterable
    popper-class="products-select-popper"
    placeholder="Тип:"
    style="width: 240px">
    <!--  -->
    <el-option
      v-for="{ type, label } in options"
      :key="type"
      :label="label"
      :value="type" />
  </el-select>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  :deep(.el-select__wrapper.is-focus),
  :deep(.el-select__wrapper.is-focused) {
    box-shadow: 0 0 0 1px $green inset !important;
  }
</style>
