
/**
 * 할 일
 * - id
 * - label
 * - completed
 */

let nextId = 4;

function getId() {
  return nextId++;
}

let todoList = [
  { id: 1, label: '일어나기', completed: false },
  { id: 2, label: '아침 먹기', completed: false },
  { id: 3, label: '학교 가기', completed: false },
];

const addTodo = () => {
  const newLabel = document.getElementById("new-label")
  const label = newLabel.value;

  const todo = {
    id: getId(),
    label, // key-value 이름이 같은 경우
    completed: false
  };
  newLabel.value = "할 일 추가하기";
  todoList = [...todoList,  todo];

  renderList();
};

const deleteTodo = (targetId) => {
  const newTodoList = todoList.filter(
    ({ id }) => id !== targetId
  );

  todoList = newTodoList;
  renderList();
};

const modifyTodo = (targetId, newLabel) => {
  const newTodoList = todoList.map((todo) => {
    if (todo.id === targetId) {
      return {...todo, label: newLabel};
    }
    return todo;
  });

  todoList = newTodoList;
  renderList();
};

const toggleCheck = (targetId) => {
  // option 1 : find and replace
  // option 2 : map
  const newTodoList = todoList.map((todo) => {
    if (todo.id === targetId) {
      return {...todo, completed: todo.completed === true ? false : true}; //overrideing
    }
    return todo;
  });

  todoList = newTodoList;
  renderList();
};

const renderTodo = (todo) => {
  const todoWrapper = document.createElement("div");
  todoWrapper.classList.add("todo-wrapper");
  todo.completed && todoWrapper.classList.add("completed");

  const todoCheck = document.createElement("input");
  todoCheck.className = "todo-check"
  todoCheck.setAttribute("type", "checkbox");
  todoCheck.checked = todo.completed;
  todoCheck.onclick = () => {
    toggleCheck(todo.id),
    renderList()
  };

  const todoLabel = document.createElement("p");
  todoLabel.className = "todo-label"
  todoLabel.innerText = todo.label;

  const deleteButton = renderDeleteTodo(todo);

  const { modifyButton, modifyModal } = renderModifyTodo(todo);

  todoWrapper.appendChild(todoCheck);
  todoWrapper.appendChild(todoLabel);
  todoWrapper.appendChild(deleteButton);
  todoWrapper.appendChild(modifyButton);
  todoWrapper.appendChild(modifyModal);

  const content = document.getElementById("content");
  content.appendChild(todoWrapper);

}

const renderDeleteTodo = (todo) => {
  const deleteButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  deleteButton.setAttribute("stroke-width","1");
  deleteButton.setAttribute("stroke","#940000");
  deleteButton.setAttribute("fill","none");
  deleteButton.setAttribute("viewBox","0 0 24 24");
  deleteButton.style.width = "22px";
  deleteButton.style.height = "22px";

  const deletePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  deletePath.setAttribute("d","M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0");
  deleteButton.appendChild(deletePath);

  deleteButton.classList.add("todo-action");
  deleteButton.classList.add("delete");
  deleteButton.onclick = () => {
    deleteTodo(todo.id);
  };

  return deleteButton;
}

const renderModifyTodo = (todo) => {
  const modifyButton = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  modifyButton.setAttribute("stroke-width","1");
  modifyButton.setAttribute("stroke","black");
  modifyButton.setAttribute("fill","none");
  modifyButton.setAttribute("viewBox","0 0 26 26");
  modifyButton.style.width = "20px";
  modifyButton.style.height = "20px";

  const modifyPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  modifyPath.setAttribute("d","M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125");
  modifyButton.appendChild(modifyPath);

  modifyButton.classList.add("todo-action");
  modifyButton.classList.add("delete");

  const modifyModal = document.createElement("div");
  modifyModal.className = "modify-modal";

  const modifyModalContent = document.createElement("div");
  modifyModalContent.className = "modify-modal-content";
  modifyModalContent.innerText = "할 일 수정하기";
  modifyModal.appendChild(modifyModalContent);

  const modifyLabel = document.createElement("input");
  modifyLabel.className = "modify-label";
  modifyLabel.setAttribute("type", "text");
  modifyLabel.setAttribute("value", "수정할 내용 작성");
  modifyModalContent.appendChild(modifyLabel);

  const modifyModalClose = document.createElement("button");
  modifyModalClose.className = "modify-modal-close";
  modifyModalClose.innerText = "수정 취소";
  modifyModalClose.addEventListener("click", () => {
    modifyModal.style.display = "none";
  });
  modifyModalContent.appendChild(modifyModalClose);

  const modifyModalSubmit = document.createElement("button");
  modifyModalSubmit.className = "modify-modal-submit";
  modifyModalSubmit.innerText = "수정 완료";
  modifyModalContent.appendChild(modifyModalSubmit);

  modifyButton.addEventListener("click", () => {
    modifyModal.style.display = "block";
    document.body.style.overflow = "hidden";
  });

  modifyModalSubmit.addEventListener("click", () => {
    modifyModal.style.display = "none";
    const label = modifyLabel.value;
    modifyTodo(todo.id, label);
  });

  return {modifyButton, modifyModal};
}

const renderList = () => {
  const content = document.getElementById("content");
  content.innerHTML = "";

  todoList.forEach( (todo) => renderTodo(todo) );
}

renderList();
