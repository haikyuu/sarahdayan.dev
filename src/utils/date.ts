function stringToNumber(value: string) {
  return parseInt(value, 10);
}

export function formattedDate(datetime: string) {
  const timestamp = Date.UTC(
    ...(datetime.split("-").map(stringToNumber) as [number, number, number])
  );
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
