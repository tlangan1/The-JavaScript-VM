"use strict";
const COUNT = Number.parseInt(process.argv[2] || "10");
console.log(`Running ${COUNT} iterations.`);

var arrayOfLikeThings = loadArray("like things");
var arrayOfUnlikeThings = loadArray("unlike things");

readArray("unlike things", arrayOfUnlikeThings);
readArray("like things", arrayOfLikeThings);

function loadArray(type) {
  var array;
  console.log("Start loading", type, "...");
  const start = performance.now();
  if (type === "like things") array = loadArrayOfLikeThings();
  else array = loadArrayOfUnlikeThings();
  const duration = performance.now() - start;
  console.log("         ", type, Number(duration * 1000).toFixed(3), "us");
  return array;
}

function loadArrayOfLikeThings() {
  var array = [];
  for (let i = 0; i < COUNT; ++i) array.push(i);
  return array;
}

function loadArrayOfUnlikeThings() {
  var array = [];
  for (let i = 0; i < COUNT / 5; ++i) {
    array.push(i);
    array.push({ item1: i });
    array.push(i.toString());
    array.push([i]);
    array.push({ firstName: "Tom", lastName: "Langan", age: 64 });
  }
  return array;
}

function readArray(type, array) {
  var item;
  console.log("Start reading", type, "...");
  const start = performance.now();
  for (let i = 0; i < array.length; ++i) {
    item = array[i];
  }
  const duration = performance.now() - start;
  console.log("         ", type, Number(duration * 1000).toFixed(3), "us");
  return array;
}
