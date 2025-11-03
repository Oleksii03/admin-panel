<script setup lang="ts"></script>

<template>
  <div class="search">
    <input
      class="search__input"
      type="text"
      placeholder="Поиск" />
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/styles/utils/variables.scss' as *;

  .search {
    width: 300px;
    min-width: 100px;
    border-radius: 4px;
    overflow: hidden;

    &__input {
      width: 100%;
      height: 30px;
      padding: 0 15px;
      border: none;
      outline: none;
      box-shadow: inset 0px 5px 13px 1px rgba(0, 0, 0, 0.16);

      &::placeholder {
        color: $dark;
        font-weight: 600;
      }
    }
  }
</style>
