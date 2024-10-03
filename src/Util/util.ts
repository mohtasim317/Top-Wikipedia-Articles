export function yesterdaysDate() {
  const timeNow = new Date();
  const year = timeNow.getFullYear();
  const month = timeNow.getMonth() + 1;
  let date = timeNow.getDate();

  if (date - 1 < 10 && month - 1 < 10) {
    return `${year}-${month}-0${date - 1}`;
  } else if (date - 1 < 10) {
    return `${year}-0${month}-0${date - 1}`;
  } else if (month - 1 < 10) {
    return `${year}-${month}-${date - 1}`;
  } else {
    return `${year}-0${month}-${date - 1}`;
  }
}
