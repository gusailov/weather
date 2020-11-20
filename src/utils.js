export function dateFormat(time, lng) {
  var options = {
    month: "long",
    day: "numeric",
  };

  const milliseconds = time * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString(lng, options);
  return humanDateFormat;
}

export function dateFormatHourly(time, lng) {
  var options = {
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const milliseconds = time * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString(lng, options);
  return humanDateFormat;
}
export function dateFormatTime(time, lng) {
  var options = {
    hour: "numeric",
    minute: "numeric",
  };
  const milliseconds = time * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString(lng, options);
  return humanDateFormat;
}
