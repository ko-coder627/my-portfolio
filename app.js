function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    li.remove();
    saveTasks();
  };

  document.getElementById("taskList").appendChild(li);

  input.value = "";

  saveTasks();
}

// 保存
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach(li => {
    tasks.push(li.textContent);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 読み込み
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;

    li.onclick = function () {
      li.remove();
      saveTasks();
    };

    document.getElementById("taskList").appendChild(li);
  });
}

loadTasks();
