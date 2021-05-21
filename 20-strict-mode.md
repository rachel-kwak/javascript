# 20장: strict mode

<br>

## 01. strict mode란?

```js
function foo() {
  x = 10; // 선언하지 않은 x 변수에 값 10 할당
  // 자바스크립트 엔진은 먼저 foo 함수의 스코프에서 x 변수의 선언을 검색하고,
  // foo 함수의 스코프에는 x 변수의 선언이 없으므로 상위 스코프에서 다시 검색을 함
  // 전역 스코프에도 x가 존재하지 않지만 ReferenceError를 발생되지 않고
  // 자바스크립트 엔진이 암묵적으로 전역 객체에 x 프로퍼티를 동적 생성
}
foo();

console.log(x);	// ?
```

- **암묵적 전역?** 전역 스코프에도 변수의 선언이 존재하지 않을 때, ReferenceError를 발생시키는 것이 아니라 암묵적으로 전역 객체에 해당 프로퍼티를 등록하는 것
  - 반드시 `var`, `let`, `const` 키워드를 사용해서 변수를 선언한 다음 사용해야 함

- ES5부터 자바스크립트 언어의 문법을 좀 더 엄격히 적용하여 오류를 발생시킬 가능성이 높거나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시키는 strict mode가 추가

- ES6에서 도입된 클래스와 모듈은 기본적으로 strict mode가 적용

<br>

## 02. strict mode의 적용

- 전역의 선두 또는 함수 몸체의 선두에 `'use strict';`를 추가
  - 전역의 선두에 추가하면 스크립트 전체에 strict mode가 적용
  - 함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용

```js
'use strict';

function foo() {
  x = 10;	// ReferenceError: x is not defined
}
foo();
```

```js
function foo() {
  'use strict';
  x = 10;	// ReferenceError: x is not defined
}
foo();
```

- 코드의 선두에 `'use strict';`를 위치시키지 않으면 strict mode가 제대로 동작하지 않음

<br>

## 03. 전역에 strict mode를 적용하는 것은 피하자

- 전역에 적용한 strict mode는 스크립트 단위로 적용

```html
<!DOCTYPE html>
<html>
  <body>
    <script>
      'use strict';
    </script>
    <script>
      x = 1;	// 에러가 발생하지 않음
      console.log(x);	// 1
    </script>
    <script>
      'use strict';
      y = 1;	// ReferenceError: y is not defined
    </script>
  </body>
</html>
```

- strict mode와 non-strict mode를 혼용하는 것은 오류를 발생시킬 수 있음
  - 특히 외부 라이브러리를 사용하는 경우 라이브러리가 non-strict mode인 경우도 있음
- 즉시 실행 함수로 스크립트 전체를 감싸서 스코프를 구분하고 즉시 실행 함수의 선두에 strict mode를 적용

```js
(function() {
  'use strict';
  
  // Do something...
}());
```

<br>

## 04. 함수 단위로 strict mode를 적용하는 것도 피하자

- 함수 단위로 strict mode를 적용할 수 있음
  - 그러나 어떤 함수는 strict mode를 적용하고 어떤 함수는 strict mode를 적용하지 않는 것은 바람직하지 않음
  - 모든 함수에 일일이 strict mode를 적용하는 것은 번거로움
  - strict mode가 적용된 함수가 참조할 함수 외부의 컨텍스트에 strict mode를 적용하지 않는다면 문제 발생

```js
(function() {
  // non-strict mode
  var let = 10;	// 에러가 발생하지 않음
  function foo() {
    'use strict';
    let = 20;	// SyntaxError: Unexpected strict mode reserved word
  }
  foo();
}());
```

- strict mode는 즉시 실행 함수로 감싼 스크립트 단위로 적용하는 것이 바람직

<br>

## 05. strict mode가 발생시키는 에러

### 암묵적 전역

- 선언하지 않은 변수를 참조하면 ReferenceError 발생

```js
(function() {
  'use strict';
  
  x = 1;
  console.log(x);	// ReferenceError: x is not defined
}());
```

### 변수, 함수, 매개변수의 삭제

- `delete` 연산자로 변수, 함수, 매개변수를 삭제하면 SyntaxError 발생

```js
(function() {
  'use strict';
  
  var x = 1;
  delete x;	// SyntaxError: Delete of an unqualified identifier in strict mode.
  
  function foo(a) {
    delete a;	// SyntaxError: Delete of an unqualified identifier in strict mode.
  }
  delete foo;	// SyntaxError: Delete of an unqualified identifier in strict mode.
}());
```

### 매개변수 이름의 중복

- 중복된 매개변수 이름을 사용하면 SyntaxError 발생

```js
(function() {
  'use strict';
  
  // SyntaxError: Duplicate parameter name not allowed in this context
  function foo(x, x) {
    return x + x;
  }
  console.log(foo(1, 2));
}());
```

### `with` 문의 사용

- `with` 문을 사용하면 SyntaxError 발생
  - `with` 문은 전달된 객체를 스코프 체인에 추가
  - 동일한 객체의 프로퍼티를 반복에서 사용할 때 객체 이름을 생략할 수 있어서 코드가 간단해지는 효과가 있지만, 성능과 가독성이 나빠지므로 사용하지 않는 것이 좋음

```js
(function() {
  'use strict';
  
  // SyntaxError: Strict mode code may not include a with statement
  with({ x: 1 }) {
    console.log(x);
  }
}());
```

<br>

## 06. strict mode 적용에 의한 변화

### 일반 함수의 `this`

- strict mode에서 함수를 일반 함수로서 호출하면 `this`에 `undefined`가 바인딩
  - 생성자 함수가 아닌 일반 함수 내부에서는 `this`를 사용할 필요가 없기 때문

```Js
(function() {
  'use strict';
  
  function foo() {
    console.log(this);	// undefined
  }
  foo();
  
  function Foo() {
    console.log(this);	// Foo
  }
  new Foo();
}());
```

### `arguments` 객체

- strict mode에서는 매개변수에 전달된 인수를 재할당하여 변경해도 `arguments` 객체에 반영되지 않음

```js
(function (a) {
  'use strict';
  // 매개변수에 전달된 인수를 재할당하여 변경
  a = 2;
  
  // 변경된 인수가 arguments 객체에 반영되지 않음
  console.log(arguments);	// { 0: 1, length: 1 }
}(1));
```

