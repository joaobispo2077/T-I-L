$ = document.querySelector.bind(document);

const button = $('[data-form-button]');
const list = $('[data-list]');

button.addEventListener('click', createTask);

function createTask(event) {
    event.preventDefault();

    const input = $('[data-form-input]');
    const value = input.value;

    const task = document.createElement('li');
    task.classList.add('task');

    const content = document.createElement('p');
    content.classList.add('content');    
    content.textContent = value;
    task.appendChild(content);



    // const buttonDelete = document.createElement('button');
    // buttonDelete.classList.add('form-button');
    // buttonDelete.textContent = 'Concluir';
    // task.appendChild(buttonDelete);

    const buttonDone = ButtonDone("concluir","check-button");
    // not bro const buttonDelete = ButtonDone("deletar","delete-button");

    task.appendChild(buttonDone);
    task.appendChild(buttonDelete);
    list.appendChild(task);

    input.value = '';
}

const ButtonDone = (text, style) => {
    const buttonDone = document.createElement('button');    
    buttonDone.classList.add(style);
    buttonDone.textContent = text;

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