import ButtonDone from './components/ButtonDone.js';
import ButtonRemove from './components/ButtonRemove.js';

const button = document.querySelector('[data-form-button]');
const list = document.querySelector('[data-list]');

button.addEventListener('click', createTask);

function createTask(event) {
    event.preventDefault();

    const input = document.querySelector('[data-form-input]');

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

const createContentTask = (value) => {


    const task = document.createElement('li');
    task.classList.add('task');

    const content = `<p class="content">${value}</p>`;

    task.innerHTML = content;

    const buttonDone = ButtonDone("Concluir", "check-button");
    const buttonRemove = ButtonRemove("Apagar", "delete-button");

    task.appendChild(buttonDone);
    task.appendChild(buttonRemove);

    return task;
}