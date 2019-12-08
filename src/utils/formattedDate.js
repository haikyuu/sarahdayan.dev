function stringToNumber(value) {
  return parseInt(value, 10);
}

export default function(datetime) {
  const timestamp = Date.UTC(...datetime.split("-").map(stringToNumber));
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
