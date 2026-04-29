export function yesterdaysDate() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);


  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, "0");
  const date = String(yesterday.getDate()).padStart(2, "0");

  return `${year}-${month}-${date}`;
}
