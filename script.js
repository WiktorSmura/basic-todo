const tasks = document.getElementById('tasks');
const form = document.getElementById('form');
const input = document.querySelector('input');

form.addEventListener('submit', event => {
  event.preventDefault();
  const text = input.value.trim();
  if (text !== '') {
    addTask(text);
    input.value = '';
    input.focus();
  };
});

function addTask (text) {
  //creating obj
  const taskKey = text;
  const task = document.createElement('div');
  task.classList.add('task');
  task.innerHTML = `
  <input type="checkbox">
  <span class="text">${text}</span>
  `;
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete');
  deleteBtn.innerText = 'delete';

  //delete function
  function deleteTask () {
    const task = this.parentNode;

    tasks.removeChild(task);
    localStorage.removeItem(taskKey);
  };
  deleteBtn.onclick = deleteTask;

  //combining together
  task.append(deleteBtn);
  tasks.appendChild(task);
  localStorage.setItem(text, task);
};

function getFromLocalStorage() {
  const myKeys = Object.keys(localStorage)
  myKeys.forEach(key => {
    addTask(key);
  })
};

getFromLocalStorage();
