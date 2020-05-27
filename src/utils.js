export function dateFormat(time) {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const milliseconds = time * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString("uk-UK", options);
  return humanDateFormat;
}

export function dateFormatHourly(time) {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const milliseconds = time * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString("uk-UK", options);
  return humanDateFormat;
}
