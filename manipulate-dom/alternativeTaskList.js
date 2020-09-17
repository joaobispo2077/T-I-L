function newTask(event) {
  event.preventDefault();

  const input = $('[data-form-input]');

  const value = input.value;

  const task = `
  <li class="task" data-task>
      <p class="content">${value}</p> 
  </li>
  `;

  list.insertAdjacentHTML('beforeend', task);

  input.value = '';
}

function criarTarefa(event) {
  event.preventDefault();

  const input = $('[data-form-input]');
  const value = input.value;

  const task = document.createElement('li');
  task.classList.add('task');

  const content = `<p class="content">${value}</p>`    

  task.innerHTML = content;

  list.appendChild(task);

  input.value = '';
}