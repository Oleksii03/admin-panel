export function useNumberFormatter() {
  function formatWithSpaces(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  function formatCurrency(
    num: number,
    currency: string,
    position: 'before' | 'after' = 'after'
  ): string {
    const formattedNumber = formatWithSpaces(num);
    return position === 'before'
      ? `${currency}${formattedNumber}`
      : `${formattedNumber} ${currency}`;
  }

  function formatWithDecimals(num: number, decimals: number = 0): string {
    const fixedNumber = num.toFixed(decimals);
    return fixedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return {
    formatWithSpaces,
    formatCurrency,
    formatWithDecimals,
  };
}
