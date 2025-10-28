<script setup lang="ts">
  import TopMenu from '@/components/TopMenu/TopMenu.vue';
</script>

<template>
  <TopMenu />
  <div class="wrapper">
    <aside class="aside">
      <ul>
        <li>
          <router-link to="/orders">
            <span>Orders</span>
          </router-link>
        </li>
        <li>
          <router-link to="/products">
            <span>Products</span>
          </router-link>
        </li>
        <li>
          <router-link to="/settings">
            <span>Settings</span>
          </router-link>
        </li>
      </ul>
    </aside>

    <main>
      <slot />
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/assets/styles/utils/variables.scss' as *;

  .wrapper {
    display: flex;
  }

  .aside {
    width: 250px;
    box-shadow: 8px 0px 8px -4px $gray;
    height: calc(100vh - 80px);
    background-color: #f5f5f580;
  }

  main {
    background-color: $blue;
    width: 100%;
  }
</style>
