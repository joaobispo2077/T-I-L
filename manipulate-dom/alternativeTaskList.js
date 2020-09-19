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


//toggle and logic risk task

function toggleDone(task, content) {
  const isRisked = task.contains(task.querySelector('s'));
  
  isRisked ? unriskedTask(task) : riskTask(task, content);
}

function riskTask(task, content){
  const risked = document.createElement('s');
  const buttonDone = task.querySelector("button");
  
  buttonDone.textContent = "desconcluir";
  
  risked.appendChild(content);
  task.insertAdjacentElement('afterbegin', risked);    
}

function unriskedTask(task){
  const risk = task.querySelector("s");
  const content = task.querySelector("p");
  const buttonDone = task.querySelector("button");
  
  buttonDone.textContent = "concluir";
  
  risk.remove();
  task.insertAdjacentElement('afterbegin', content); 
}