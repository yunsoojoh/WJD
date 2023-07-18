const callback = () => {
  setTimeout(() => {
	console.log("A");
		setTimeout(() => {
	     console.log("B");
			 setTimeout(() => {
					 console.log("C");
			 }, 1000)
    }, 1000)
  }, 1000)
}

const promise = () => {
  let a = 1 ;

  const func = new Promise((resolve) => {
    setTimeout(() => {
      console.log(a++);
      resolve();
    }, 1000);
  })

  func().then(func().then).catch(); // 아무때나 중간에 err 발생 시 중간에 그만두고 catch로 이동
}


callback();
promise();
