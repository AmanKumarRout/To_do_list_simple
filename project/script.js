function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    //new list item
    let li = document.createElement("li");
    li.textContent = taskInput.value;

    // click
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    //delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Append button
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";
}
