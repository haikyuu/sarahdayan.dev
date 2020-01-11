export function formattedCount(count: number) {
  const formatter = new Intl.NumberFormat("en-US");

  return formatter.format(count);
}
