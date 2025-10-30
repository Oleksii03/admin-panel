import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { ORDERS_URL, PRODUCTS_URL } from '@/constants';
import type { Order, Product } from '@/types';

export const useRootStore = defineStore('root', () => {
  const orders = ref<Order[]>([]);
  const products = ref<Product[]>([]);
  const isLoading = ref(false);

  async function getOrders() {
    isLoading.value = true;

    try {
      const { data } = await axios.get(ORDERS_URL);
      orders.value = data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }

  async function getProducts() {
    isLoading.value = true;

    try {
      const { data } = await axios.get(PRODUCTS_URL);
      products.value = data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }

  return { orders, products, isLoading, getOrders, getProducts };
});
