document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskValue = taskInput.value.trim();
    if (taskValue !== '') {
        
        const newTaskItem = document.createElement('div');
        newTaskItem.className = 'task-item';
        const taskText = document.createElement('span');
        taskText.textContent = taskValue;
        taskText.className = 'task-text';
        taskText.addEventListener('click', function() {
            taskText.classList.toggle("strike");
        });
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', function() {
            taskList.removeChild(newTaskItem);
        });

        newTaskItem.appendChild(taskText);
        newTaskItem.appendChild(removeButton);
        taskList.appendChild(newTaskItem);
        taskInput.value = '';
    }else{
    alert("Please enter valid task")

    }
});