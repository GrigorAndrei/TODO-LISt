const inputBox = document.getElementsByClassName("form-control text_input")[0];
const addBtn = document.getElementsByClassName("add_btn")[0];
const list = document.getElementsByClassName("todo_list")[0];

const trashIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>`;

inputBox.onkeyup = () => {
  const userValue = inputBox.value;

  /* userValue.trim() !== 0
    ? addBtn.classList.add("active")
    : addBtn.classList.remove("active");
  */
  if (userValue.trim() !== 0) {
    addBtn.classList.add("active");
  } else addBtn.classList.remove("active");
};

showTasks();

addBtn.onclick = () => {
  const userData = inputBox.value;
  let localStrg = localStorage.getItem("New Todo");
  //localStrg === null ? (taskList = []) : (taskList = JSON.parse(localStrg));
  let taskList = localStrg === null ? [] : JSON.parse(localStrg);
  /*if (localStrg === null) {
    taskList = [];
  } else {
    taskList = JSON.parse(localStrg);
  }*/
  taskList.push(userData);
  localStorage.setItem("New Todo", JSON.stringify(taskList));
  showTasks();
};

function showTasks() {
  let localStrg = localStorage.getItem("New Todo");
  if (localStrg === null) {
    taskList = [];
  } else {
    taskList = JSON.parse(localStrg);
  }

  let newItem = "";
  taskList.forEach((element, index) => {
    newItem += `<li> ${element} <button class="btn btn-danger del_btn" onclick="deleteTask(${index})">${trashIcon}</button></li>`;
  });

  list.innerHTML = newItem;
}

function deleteTask(index) {
  let localStrg = localStorage.getItem("New Todo");
  taskList = JSON.parse(localStrg);
  taskList.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(taskList));
  showTasks();
}
