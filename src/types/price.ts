import type { CurrencySymbol, Flag01 } from './common';

export interface Price {
  value: number;
  symbol: CurrencySymbol;
  isDefault: Flag01;
}
