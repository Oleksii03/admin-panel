<script setup lang="ts">
  import TopLogo from '@/components/TopMenu/TopLogo.vue';
  import TopSearch from '@/components/TopMenu/TopSearch.vue';
  import DateInfo from '@/components/TopMenu/DateInfo.vue';
</script>

<template>
  <header class="header">
    <div class="container header__container">
      <TopLogo />
      <TopSearch />
      <DateInfo />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .header {
    box-shadow: 0px 5px 8px -3px $gray;
    padding: 10px 0;

    &__container {
      display: flex;
      align-items: center;
    }
  }
</style>
