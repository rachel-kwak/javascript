// 45p

console.log(score); // undefined

score = 80;
var score;

console.log(score); // 80

/* WHY?
자바스크립트에서 변수 선언은 런타임이 아니라 그 이전 단계에서 먼저 실행된다.
따라서 var score; 가 제일 처음 실행되어 메모리 공간을 확보받고 undefined라는 값으로 암묵적 초기화된다.
따라서 3번째 줄에서는 undefined가 나오고, 5번째 줄에서 변수에 80을 재할당했기 때문에 8번째 줄에서는 80이 나온다.
이처럼 변수 선언문이 코드의 선두로 끌어 올려진 것처럼 동작하는 것을 호이스팅(Hoisting)이라고 한다.
*/