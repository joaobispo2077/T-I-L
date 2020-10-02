import ButtonDone from './components/ButtonDone.js';
import ButtonRemove from './components/ButtonRemove.js';
import toggleXXS from './components/Toggle.js';

var isXxsEnabled = false;
const button = document.querySelector('[data-form-button]');
const list = document.querySelector('[data-list]');
const xxsButton = document.querySelector('[data-form-xxs]');
const title = document.querySelector('.title');

button.addEventListener('click', createTask);

xxsButton.addEventListener('click', () => {
    isXxsEnabled = toggleXXS(isXxsEnabled, xxsButton, title);
});

function createTask(event) {
    event.preventDefault();


    const input = document.querySelector('[data-form-input]')
    let pattern;
    let value;

    if (!isXxsEnabled) {
        pattern = /<.+?>/g;
        value = input.value.replaceAll(pattern, " ");
    } else {
        value = input.value;
    }


    if (value.length >= 4) {

        const task = createContentTask(value);

        list.appendChild(task);

        input.value = '';
    } else {
        isXxsEnabled ?
            alert("Você precisa digitar mais que 3 caracteres") :
            alert("Você precisa digitar mais que 3 caracteres e não pode ser um XXS");

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