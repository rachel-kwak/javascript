// 88p

// typeof 연산자는 피연산자의 데이터 타입을
// "string", "number", "boolean", "undefined", "symbol", "object", "function" 중 하나로 반환한다.
// 이때, typeof 연산자로 null의 값을 연산해보면 "object"를 반환하는 것에 주의해야 한다.
// 따라서 값이 null 타입인지 확인할 때는 typeof 연산자를 사용하지 말고 일치 연산자(===)를 사용한다.

typeof null; // -> "object"

var foo = null;
typeof foo === null; // -> false
foo === null; // -> true
