<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { useDateFormatter } from '@/composables/useDateFormatter';

  const { formatDateFull } = useDateFormatter();

  const currentDate = ref(new Date());
  const currentTime = ref('');

  let timeInterval: number | null = null;

  const updateDateTime = () => {
    const now = new Date();
    currentDate.value = now;

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    currentTime.value = `${hours}:${minutes}`;
  };

  const getDayLabel = () => {
    const today = new Date();
    const isToday =
      currentDate.value.getDate() === today.getDate() &&
      currentDate.value.getMonth() === today.getMonth() &&
      currentDate.value.getFullYear() === today.getFullYear();

    return isToday ? 'Today' : 'Date';
  };

  onMounted(() => {
    updateDateTime();
    timeInterval = setInterval(updateDateTime, 60000);
  });

  onUnmounted(() => timeInterval && clearInterval(timeInterval));
</script>

<template>
  <div class="date-info">
    <p class="date-info__day">{{ getDayLabel() }}</p>

    <div class="date-info__date-box">
      <p class="date-info__date">{{ formatDateFull(currentDate) }}</p>
      <p class="date-info__time">
        <el-icon class="date-info__time-icon"><Clock /></el-icon>

        <span class="date-info__time-text">{{ currentTime }}</span>
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '@/assets/styles/utils/variables.scss' as *;

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
        color: $green;

        & > svg {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
