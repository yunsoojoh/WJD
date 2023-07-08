const isDataVaild = (data) => {
  return data.name && data.age;
};

const data = {
  name: "John",
  age: 30,
};

console.log(isDataVaild(data));
