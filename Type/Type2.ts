let d: number = 1;
let e: string = "i1";
let f: boolean = true;

let g: number[] = [1, 2];
let h: string[] = ["i1", "1"];
let j: boolean[] = [true];

// Typescript 에선 가능한 한 Tpyescript로 추론하게 하는 것이 좋다.

// Optional 타입 (선택적 변수)

// 밑에 나온 상황에서 player가 물결 표시로 에러를 띄우게 된다. 왜냐하면  player안에 age를 찾지 못했기 때문에 발생하게 된다.
// const player: { name: string; age: number } = {
//   name: "chanhyo",
// };
// 이럴 경우 age바로뒤에 ?를 넣게 되면 name: string , age : number | undefined로 나오게 된다.

const player: { name: string; age?: number } = {
  name: "chanhyo",
};

// 이렇게 사용할 경우 player.age에 undefined 라고 에러 띄우게 되는데 이걸 사용하려면
// if(player.age < 10){

// }

if (player.age && player.age < 10) {
}

// 만약 player를 엄청 많이 만들게 된다면 밑에 나온거처럼 계속 쓰게 되는데
// 이 경우에는 Alias(별칭) 타입을 생성할 수 있다.
// 장점 : 코드가 많은 타입을 재사용할 수 있다.

type Player = {
  name: string;
  age?: number;
};

// const playerChanhyo: Player = {
//   name: "chanhyo",
//   age: 28,
// };

// const playerNico: Player = {
//   name: "Nico",
// };

// function playerChanhyo(name: string): Player {
//   return {
//     name,
//   };
// }

const playerChanhyo = (name: string): Player => ({ name });
const chanhyo = playerChanhyo("chanhyo");
chanhyo.age = 12;
