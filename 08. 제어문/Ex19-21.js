// 104p

// 레이블 문은 식별자가 붙은 문을 말한다.

// foo라는 레이블 식별자가 붙은 레이블 문
foo: console.log('foo');

// foo라는 식별자가 붙은 레이블 블록문
foo: {
    console.log(1);
    break foo; // foo 레이블 블록문을 탈출한다.
    console.log(2);
}

console.log('Done!');

// 105p

// outer라는 식별자가 붙은 레이블 for 문
outer: for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        if (i + j ===  3) break outer;
        console.log(`inner [${i}, ${j}]`);
    }
}

console.log('Done!');

// 레이블 문은 중첩된 for문 외부로 탈출할 때 유용하지만, 그 밖의 경우에는 일반적으로 권장하지 않는다.
// 프로그램의 흐름이 복잡해져서 가독성이 나빠지고 오류를 발생시킬 가능성이 높아지기 때문이다.