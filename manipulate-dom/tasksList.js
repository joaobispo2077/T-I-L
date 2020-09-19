$ = document.querySelector.bind(document);

const button = $('[data-form-button]');
const list = $('[data-list]');

button.addEventListener('click', createTask);

function createTask(event) {
    event.preventDefault();

    const input = $('[data-form-input]');

    const pattern = /<.+?>/g;
    const value = input.value.replaceAll(pattern, " ");

    if (value.length >= 4) {
        
        const task = createContentTask(value);

        list.appendChild(task);
    
        input.value = '';
    } else {
        alert("Você precisa digitar mais que 3 caracteres");
    }

}

//logic to create a task
function createContentTask(value) {
    const task = document.createElement('li');
    task.classList.add('task');

    const content = `<p class="content">${value}</p>`;

    task.innerHTML = content;
    
    const buttonDone = ButtonDone("concluir","check-button");
    const buttonRemove = ButtonRemove("apagar", "delete-button");

    task.appendChild(buttonDone);
    task.appendChild(buttonRemove);

    return task;
}

//buttons components

const Button = (text, style) => {
    const button = document.createElement('button');

    button.classList.add(style);
    button.textContent = text;

    return button;
}

const ButtonDone = (text, style) => {
    const buttonDone = Button(text, style);

    buttonDone.addEventListener('click', completeTask);
    return buttonDone;    
}

const completeTask = (event) => {
    event.preventDefault();
        
        const task = event.target.parentNode;
        const content = event.target.previousSibling;

       toggleDone(task, content);
}

const ButtonRemove = (text, style) => {
    const buttonRemove = Button(text, style);

    buttonRemove.addEventListener('click', deleteTask);

    return buttonRemove;
}

const deleteTask = (event) => {
    const deletedItem = event.target.parentElement;

    deletedItem.remove();
}

//toggle and logic risk task

function toggleDone(task, content) {
    const isRisked = task.contains(task.querySelector('s'));

    isRisked ? unriskedTask(task)  : riskTask(task, content);
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