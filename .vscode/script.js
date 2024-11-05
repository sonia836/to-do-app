const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    // Mark task as completed when clicked
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => taskList.removeChild(taskItem);

    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear input field
    taskInput.value = "";
}
