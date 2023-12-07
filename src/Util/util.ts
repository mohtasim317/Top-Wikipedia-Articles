export function yesterdaysDate() {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

export function todaysDate() {
  let d = new Date();
  d.setDate(d.getDate());
  return d.toISOString().split("T")[0];
}
