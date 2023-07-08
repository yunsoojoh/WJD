function func() {
  return "기본 함수";
}

console.log(func());

const func2 = () => {
  return "화살표 함수";
}

console.log(func2());

(() => {
  console.log("즉시 실행 함수");
})();

() => {
  console.log("익명 함수");
}

// 기본값
function func5(a, b, c, d = "default value") {

}


// 인자 안 넘겨줘도 하긴 함...
function introduce(name, age) {
  console.log(`My name is ${name} and ${age} years old.`);
  console.log(arguments[1]);
}

introduce("JS");


// obj 내의 func
const obj = {
  name: "John",
  age: 30,
  introduce: introduce,
};

obj.introduce(obj.name, obj.age);


// func를 인자로 넘기기
function funcInFunc (log) {
  log("Hello Func in Func");
}

funcInFunc(console.log);
