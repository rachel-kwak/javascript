// 119p

// 논리합 연산자는 두 개의 피연산자 중 하나만 true로 평가되어도 true를 반환한다.
// 첫번째 피연산자가 Truthy 값이면 논리 연산의 결과를 결정한 첫번째 피연산자를 그대로 반환한다.
// 논리곱 연산자는 두 개의 피연산자가 모두 true로 평가될 때 true를 반환한다.
// 첫번째 피연산자가 true일 때, 두번째 피연산자가 Truthy 값이면 논리 연산즤 결과를 결정하는 두번째 피연산자를 그대로 반환한다.

// 논리합 연산자
console.log('Cat' || 'Dog'); // 'Cat'
console.log(false || 'Dog'); // 'Dog'
console.log('Cat' || false); // 'Cat'

// 논리곱 연산자
console.log('Cat' && 'Dog'); // 'Dog'
console.log(false && 'Dog'); // false
console.log('Cat' && false); // false

// 이처럼 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환하는 것을 단축 평가라고 한다.
// 단축 평가는 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것을 말한다.