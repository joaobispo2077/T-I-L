$ = document.querySelector.bind(document);

const button = $('[data-form-button]');
const list = $('[data-list]');

button.addEventListener('click', createTask);

function createTask(event) {
    event.preventDefault();

    const input = $('[data-form-input]');
    const value = input.value;

    if (value.length >= 4) {
        
        const task = createContentTask(value);

        list.appendChild(task);
    
        input.value = '';
    } else {
        alert("Você precisa digitar mais que 4 caracteres");
    }

}

const ButtonDone = (text, style) => {
    const buttonDone = Button(text, style);

    buttonDone.addEventListener('click', (event) => {
        event.preventDefault();
        
        const content = event.target.previousSibling;
        const task = event.target.parentNode;

        const isRisked = task.contains(task.querySelector('s'));

        isRisked ? unriskedTask(task)  : riskTask(task, content);
        
    })
    return buttonDone;    
}

const ButtonRemove = (text, style) => {
    const buttonRemove = Button(text, style);

    buttonRemove.addEventListener('click', (event) => {
        const deletedItem = event.target.parentElement;

        deletedItem.remove();
    });

    return buttonRemove;
}

const Button = (text, style) => {
    const button = document.createElement('button');

    button.classList.add(style);
    button.textContent = text;

    return button;
}

function createContentTask(value) {
    const task = document.createElement('li');
    task.classList.add('task');

    const content = document.createElement('p');
    content.classList.add('content');

    content.textContent = value;

    task.appendChild(content);
    
    const buttonDone = ButtonDone("concluir","check-button");
    const buttonRemove = ButtonRemove("apagar", "delete-button");

    task.appendChild(buttonDone);
    task.appendChild(buttonRemove);

    return task;
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