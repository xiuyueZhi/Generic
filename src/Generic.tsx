// const printParam = (param: string): string => {
//   console.log("输入参数为：", param);
//   return param;
// };

// printParam("string param");

// const printParam = (param: number): number => {
// 	console.log('输入参数为：', param)
// 	return param
// }

// printParam(1234)

const printParam = (param: boolean): boolean => {
  console.log("输入参数为：", param);
  return param;
};

printParam(true);

const printUnion = (
  param: string | number | boolean
): string | number | boolean => {
  console.log("输入参数为：", param);
  return param;
};
const printAny = (param: any): any => {
  console.log("输入参数为：", param);
  return param;
};

printUnion("string param");
printUnion(1234);
printUnion(true);

printAny("string param");
printAny(1234);
printAny(true);

// const str: boolean = printUnion('string param')
// const num: number = printAny('1234')

// console.log(str)
// console.log(num)

// const printT = <T,>(param: T): T => {
// 	console.log('输入参数为：', param)
// 	return param
// }

// const strString: string = printT<string>('string param')
// const numNumber: number = printT<number>(1234)
// const booBoolean: boolean = printT<boolean>(true)

// const printT = <T = String>(param: T): T => {
// 	console.log('输入参数为：', param)
// 	return param
// }

function printT<T = String>(param: T): T {
  console.log("输入参数为：", param);
  return param;
}
const numNumber: number = printT(12345);
// const strString: string = printT("string param5");
console.log(numNumber);

// 泛型类型默认值
interface Iprint<T = number> {
  (arg: T): T;
}

function print<T>(arg: T) {
  console.log(arg);
  return arg;
}

const myPrint: Iprint = print;
myPrint("123");

// function printS<T=number>(arg:T) {
//   console.log(arg)
//   return arg
// }
// printS('123s')

function printExtends<T extends String>(param: T): T {
  console.log("输入参数为：", param);
  if (typeof param === "string") {
    param.toString();
    return param.toString(); // 逆变 协变 父类型不能赋值给子类型
  }
  return param;
}

interface Length {
  length: number;
}
function calLength<T extends Length>(value: T): T {
  console.log("传入参数的长度为：", value.length);
  return value;
}

console.log('calLength("string")：', calLength("string"));
console.log("calLength([1, 2, 3])：", calLength([1, 2, 3]));
console.log("calLength(123)：", calLength(123)); // error
export default function Generic() {}
