


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();


    const taskDescription = document.getElementById('new-task-description').value;



    const newTask = document.createElement('li');
    newTask.textContent = taskDescription;


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      newTask.remove();
    });
    newTask.appendChild(deleteButton);


    const priority = document.getElementById('priority-selector').value;
    switch (priority) {
      case 'high':
        newTask.style.color = 'red';
        break;
      case 'medium':
        newTask.style.color = 'yellow';
        break;
      case 'low':
        newTask.style.color = 'green';
        break;
    };


    const tasksList = document.getElementById('tasks');
    tasksList.appendChild(newTask);
  });
});
