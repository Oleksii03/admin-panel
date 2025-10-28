<script setup lang="ts"></script>

<template>
  <div class="date-info">
    <p class="date-info__day">Today</p>

    <div class="date-info__date-box">
      <p class="date-info__date">17 September 2023</p>
      <p class="date-info__time">
        <img
          class="date-info__time-icon"
          src="/clock.svg"
          alt="clock" />

        <span class="date-info__time-text">12:00</span>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .date-info {
    font-size: 14px;
    margin-left: auto;

    &__day {
      &:not(:last-child) {
        margin-bottom: 6px;
      }
    }

    &__date {
      &-box {
        display: flex;
        align-items: center;
        column-gap: 16px;
      }
    }

    &__time {
      display: flex;
      align-items: center;
      column-gap: 4px;

      &-icon {
        width: 18px;
        height: 18px;
      }
    }
  }
</style>
