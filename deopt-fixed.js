import { benchA, benchB, benchC, benchD } from "./deoptFunctions.js";

const COUNT = Number.parseInt(process.argv[2] || "10");
console.log(`Running ${COUNT} iterations.`);

// let value = 0;
// function benchA() {
//   value = value === 0 ? 0 : 1;
// }
// function benchB() {
//   value = value === 0 ? 0 : 2;
// }
// function benchC() {
//   value = value === 0 ? 0 : 3;
// }
// function benchD() {
//   value = value === 0 ? 0 : 4;
// }

//benchmark('-------------------------- IGNORE --------------------------', benchA);

// benchmark("A", benchA);
// benchmark("B", benchB);
// benchmark("C", benchC);
// benchmark("D", benchD);

/////////////////////

var counterA = benchmark("A");
while (counterA.next().value) {
  benchA();
}
var counterB = benchmark("B");
while (counterB.next().value) {
  benchB();
}
var counterC = benchmark("C");
while (counterC.next().value) {
  benchC();
}
var counterD = benchmark("D");
while (counterD.next().value) {
  benchD();
}

function* benchmark(name) {
  console.log("Starting:", name, "...");
  const start = performance.now();
  for (let i = 0; i < COUNT; i++) {
    yield true;
  }
  const duration = performance.now() - start;
  console.log(
    "         ",
    name,
    Number((duration / COUNT) * 1000 * 1000).toFixed(3),
    "us"
  );
  return false;

  return x;
}
