import type { Flag01 } from './common';
import type { Guarantee } from './guarantee';
import type { Price } from './price';

export interface Product {
  id: number;
  serialNumber: number;
  isNew: Flag01;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
}
