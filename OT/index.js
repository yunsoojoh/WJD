// window는 브라우저가 찾아준다
// const refreshButton = window.document.getElementById("refresh");

// refreshButton.addEventListener("click", () => {
//   window.location.reload();
// });

const refreshButton = document.createElement("button");

refreshButton.textContent = "새로고침 버튼";
refreshButton.style = `
  display: block;
  margin-top: 20px;
  padding: 12px 20px;
  background: none;
  background-color: bisque;
  box-shadow: inset 0px 0px 7px 5px lightpink;
  border: solid 1px lightpink;
  border-radius: 5px;
  `;
document.body.appendChild(refreshButton);

refreshButton.addEventListener("click", () => {
  window.location.reload();
});

const redirectButton = document.createElement("button");

redirectButton.textContent = "이동 버튼";
redirectButton.style = `
  margin-top: 20px;
  padding: 12px 20px;
  background: none;
  background-color: bisque;
  box-shadow: inset 0px 0px 7px 5px lightpink;
  border: solid 1px lightpink;
  border-radius: 5px;
  `;
document.body.appendChild(redirectButton);

redirectButton.addEventListener("click", () => {
  window.location.href = "https://www.naver.com";
});
