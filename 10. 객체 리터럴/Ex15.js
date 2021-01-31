// 132p

var person = {
    'last-name': 'Lee',
    1: 10
};

person.'last-name';     // Syntax error
person.last-name;       // 브라우저 환경 - NaN
                        // Node.js 환경 - ReferenceError: name is not defined

/* WHY?
person.last-name을 실행할 때 자바스크립트 엔진은 먼저 person.last를 평가한다.
person 객체에는 프로퍼치 키가 last인 프로퍼티가 없기 때문에 person.last는 undefined로 평가된다.
따라서 person.last-name은 undefined-name과 같으므로
자바스크립트 엔진이 name이라는 식별자를 찾는데 name이라는 식별자가 없으므로 ReferenceError가 발생한다.

그러나 브라우저 환경에서는 name이라는 전역변수가 암묵적으로 존재한다.
전역변수 name은 창(window)의 이름을 가리키며, 기본값은 빈 문자열이다.
따라서 person.last-name은 undefined-''와 같으므로 NaN가 되는 것이다.
*/

person[last-name];      // ReferenceError: last is not defined
person['last-name'];    // Lee

// 프로퍼티가 숫자로 이루어진 문자열인 경우 따옴표를 생략할 수 있다.
person.1;       // SyntaxError: Unexpected number
person.'1';     // SyntaxError: Unexpected string
person[1];      // 10
person['1'];    // 10