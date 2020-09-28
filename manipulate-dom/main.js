import ButtonDone from './components/ButtonDone.js';
import ButtonRemove from './components/ButtonRemove.js';

var isXxsEnabled = false;
const button = document.querySelector('[data-form-button]');
const list = document.querySelector('[data-list]');
const xxsButton = document.querySelector('[data-form-xxs]');
const title = document.querySelector('.title');

button.addEventListener('click', createTask);

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



const toggleXXS = () => {

    isXxsEnabled ?
        disabledXXS() :
        activatedXXS();



}

xxsButton.addEventListener('click', toggleXXS);

function disabledXXS() {
    isXxsEnabled = false;
    title.classList.remove('title-xxs')

    xxsButton.classList.remove('button-xxs-green');
    xxsButton.classList.add('button-xxs-purple');
    alert("Você desativou o modo XXS, agora os seus XXS serão sanitizados e não vão funcionar mais");
}

function activatedXXS() {
    isXxsEnabled = true;
    title.classList.add('title-xxs')

    xxsButton.classList.add('button-xxs-green');

    alert("Você ativou o modo XXS, insira algum XXS no input para testar os seus XXS!");
}