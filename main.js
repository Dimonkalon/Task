const newTaskInput = document.getElementById("new-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Функция для добавления новой задачи в список
function addTask() {
	// Получаем текст из поля ввода
	const newTaskText = newTaskInput.value;

	// Создаем новый элемент списка и добавляем его в конец списка
	const newTaskItem = document.createElement("li");

	// Создаем элемент "галочка" и добавляем его в элемент списка
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	newTaskItem.appendChild(checkbox);

	// Создаем текстовый узел с текстом задачи и добавляем его в элемент списка
	const taskText = document.createTextNode(newTaskText);
	newTaskItem.appendChild(taskText);

	// Добавляем обработчик события "change" на элемент "галочка"
	checkbox.addEventListener("change", function() {
		if (checkbox.checked) {
			newTaskItem.classList.add("completed");
		} else {
			newTaskItem.classList.remove("completed");
		}
	});

	taskList.appendChild(newTaskItem);

	// Очищаем поле ввода
	newTaskInput.value = "";
}

// Добавляем обработчик клика на кнопку "Добавить"
addTaskButton.addEventListener("click", addTask);