let value = 0;
export function benchA() {
  value = value === 0 ? 0 : 1;
  //   return value;
}
export function benchB() {
  value = value === 0 ? 0 : 2;
  //   return value;
}
export function benchC() {
  value = value === 0 ? 0 : 3;
  //   return value;
}
export function benchD() {
  value = value === 0 ? 0 : 4;
  //   return value;
}
