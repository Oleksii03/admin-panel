<script lang="ts" setup>
  import { ref } from 'vue';

  const emit = defineEmits<{
    'get-products-by-type': [type: string];
  }>();

  const type = ref('');

  const getTypeProduct = () => emit('get-products-by-type', type.value);

  const options = [
    {
      id: 1,
      type: ' ',
      label: 'All',
    },
    {
      id: 2,
      type: 'Monitors',
      label: 'Monitors',
    },
    {
      id: 3,
      type: 'Laptops',
      label: 'Laptops',
    },
    {
      id: 4,
      type: 'Mobile-Phones',
      label: 'Mobile Phones',
    },
  ];
</script>

<template>
  <el-select
    v-model="type"
    filterable
    placeholder="Тип:"
    style="width: 240px"
    @change="getTypeProduct">
    <!--  -->
    <el-option
      v-for="{ id, type, label } in options"
      :key="id"
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
