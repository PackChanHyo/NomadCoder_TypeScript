let a = "hello"; //
// a = 1  위에 타입이 string이므로 타입 추론으로 인해 에러가 발생한다. : 타입추론
let b: boolean = false; // "x" b가 boolean이기 때문에 string을 넣을 경우 에러가 발생한다. : 명시적 표현
let c = [1, 2, 3];
// c.push("1"); c에는 Number만 들어간 배열이기 떄문에 다른 타입을 넣게되면 에러를 발생한다.

const player = {
    name: "nico"
}

// player.name = 1  player 안에는 string으로 추론되었는데 숫자 및 다른 타입을 넣을경우 에러가 발생한다.
// player.hello()  player 안에 hello가 없기 때문에 에러 발생
