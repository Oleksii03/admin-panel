export function useDateFormatter() {
  function formatDateFull(date: string | Date, locale: string = 'ru-RU'): string {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const monthFormatter = new Intl.DateTimeFormat(locale, { month: 'long' });
    let month = monthFormatter.format(dateObj);

    month = month.charAt(0).toUpperCase() + month.slice(1);
    const year = dateObj.getFullYear();

    return `${day} / ${month} / ${year}`;
  }

  function formatDateNumbers(date: string | Date): string {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');

    return `${day} / ${month}`;
  }

  return {
    formatDateFull,
    formatDateNumbers,
  };
}
