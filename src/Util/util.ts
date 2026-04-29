export function yesterdaysDate() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

<<<<<<< HEAD
  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, "0");
  const date = String(yesterday.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
=======
  if (date - 1 < 10 && month - 1 < 10) {
    return `${year}-${month}-0${date - 1}`;
  } else if (date - 1 < 10) {
    return `${year}-0${month}-0${date - 1}`;
  } else if (month - 1 < 10) {
    return `${year}-${month}-${date - 1}`;
  } else {
    return `${year}-0${month}-${date - 1}`;
  }
>>>>>>> 5ab6623e6cb9aa153eb9edb370572858fb4159bb
}
