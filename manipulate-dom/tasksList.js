$ = document.querySelector.bind(document);

const button = $('[data-form-button]');
const list = $('[data-list]');

button.addEventListener('click', createTask);

function createTask(event) {
    event.preventDefault();

    const input = $('[data-form-input]');
    const value = input.value;

    const { task, content }  = createLine(value);

    task.appendChild(content);

    const buttonDone = ButtonDone("concluir","check-button");
    const buttonRemove = ButtonRemove("apagar", "delete-button");    

    task.appendChild(buttonDone);
    task.appendChild(buttonRemove);
    
    list.appendChild(task);

    input.value = '';
}

const ButtonDone = (text, style) => {
    const buttonDone = Button(text, style);

    buttonDone.addEventListener('click', (event) => {
        event.preventDefault();
        
        const content = event.target.previousSibling;
        const task = event.target.parentNode;

        const risked = document.createElement('s');
        risked.appendChild(content);
        task.insertAdjacentElement('afterbegin', risked);
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

function createLine(value) {
    const task = document.createElement('li');
    task.classList.add('task');

    const content = document.createElement('p');
    content.classList.add('content');    
    content.textContent = value;

    return {task, content};
}

//idea to unrisk task
// isRisked = task.contains('s');
// isRisked ? $('s').remove() : riskElement(task);
// const risked = document.createElement('s');
// risked.appendChild(content);
// task.insertAdjacentElement('afterbegin', risked);