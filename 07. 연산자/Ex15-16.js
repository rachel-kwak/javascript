// 82p

NaN === NaN; // -> false

// 일치 비교 연산자인 '==='에서 NaN은 자신과 일치하지 않는 유일한 값이다.
// 따라서 숫자가 NaN인지 조사하려면 빌트인 함수 isNaN을 사용한다.

isNaN(NaN); // -> true
isNaN(10); // -> false
isNaN(1 + undefined); // -> true
