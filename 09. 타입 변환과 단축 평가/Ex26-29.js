// 122p

// ES11(ECMAScript2020)에 도입된 옵셔널 체이닝 연산자 ?.는
// 좌항의 피연산자가 null 또는 undefined인 경우 undefined를 반환하고,
// 그렇지 않으면 우항의 프로퍼티 참조를 이어간다.

var elem = null;
var value = elem?.value;
console.log(value); // undefined

// ?.가 도입되기 이전에는 논리 연산자 &&를 사용한 단축 평가를 통해 변수가 null 또는 undefined인지 확인했다.
var elem = null;
var value = elem && elem.value;
console.log(value); // null

// 해당 방법은 문자열일 때 문제가 생겼다.
var str = '';
var length = str && str.length; // falsy 값이므로 좌항의 값을 그대로 반환
console.log(length); // ''로 출력됨. 즉, 문자열의 길이를 참조하지 못함.

// 123p

// 그러나 옵셔널 체이닝 연산자 ?.는 좌항 피연산자가 falsy 값이라도
// null 또는 undefined가 아니면 우항의 프로퍼티 참조를 이어간다.
var str = '';
var length = str?.length;
console.log(length); // 0
