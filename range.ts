let range = {
  from: 1,
  to: 5,
};

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function () {
  // ...она возвращает объект итератора:
  // 2. Далее, for..of работает только с этим итератором,
  // запрашивая у него новые значения
  return {
    current: this.from,
    last: this.to,

    // 3. next() вызывается на каждой итерации цикла for..of
    next() {
      // 4. он должен вернуть значение в виде объекта {done:.., value :...}
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// теперь работает!
for (let num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}
let str = "Hello";

// делает то же самое, что и
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value); // выводит символы один за другим
}
let obj = {
  1: "строка",
};
console.log(obj[1]);
console.log(obj["1"]);

console.log("foo" + +"bar");
console.log("foo" + +"bar");
console.log([] - null - "1", "null");
console.log([] + 1);
console.log(!!"false" == !!"true");
console.log(("" && "") || "c");
console.log(("z" && "") || "c");
console.log(!"false");
