const inputBox = document.querySelector(".text_input");
const addBtn = document.querySelector(".add_btn");
const list = document.querySelector(".todo_list");

inputBox.onkeyup = () => {
  let userValue = inputBox.value;
  if (userValue.trim() != 0) {
    addBtn.classList.add("active");
  } else addBtn.classList.remove("active");
};

showTasks();

addBtn.onclick = () => {
  let userData = inputBox.value;
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  listArray.push(userData);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
};

function showTasks() {
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }

  let newLITag = "";
  listArray.forEach((element, index) => {
    newLITag += `<li> ${element} <button class="btn btn-danger del_btn" onclick="deleteTask(${index})">Delete</button></li>`;
  });

  list.innerHTML = newLITag;
}

function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("New Todo");
  listArray = JSON.parse(getLocalStorage);
  listArray.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(listArray));
  showTasks();
}
