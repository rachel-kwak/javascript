// 134p

// ES5
var x = 1, y = 2;
var obj1 = {
    x: x,
    y: y
};
console.log(obj1);   // { x: 1, y: 2 }

// ES6
var x = 1, y = 2;
// 프로퍼티 축약 표현
const obj2 = { x, y };
console.log(obj2);   // { x: 1, y: 2 }