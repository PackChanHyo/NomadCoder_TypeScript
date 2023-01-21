type Player = {
  readonly name: string;
  age?: number;
};

const playerMaker = (name: string): Player => ({ name });

// Player에 name은 readonly로 읽기 전용으로 변경되었기 때문에 작동하지 않고 에러를 발생하게 된다
const nico = playerMaker("nico");
// nico.name = "aa"

// Numbers는 readonly(읽기 전용)으로 변경되었기 때문에 작동하지 않고 에러를 발생하게 된다
const numbers: readonly number[] = [1, 2, 3, 4];
// numbers.push(1)

// Tuple (array를 생성할 수 있다)
//정해진 개수와 순서에 따라 배열 선언
// 순서가 바뀔경우 type이랑 같지 않아 에러를 발생한다.
const player: [string, number, boolean] = ["nico", 1, true];
// readonly도 사용가능 ⇒ readonly [...] 형태로 쓰게 되면 변경 x

// undefined, null, any
// any: 아무 타입
// undefined: 선언X 할당X
// null: 선언O 할당X
