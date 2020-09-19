import Button from './Button.js';

const ButtonDone = (text, style) => {
    const buttonDone = Button(text, style);

    buttonDone.addEventListener('click', completeTask);
    return buttonDone;
}

const completeTask = (event) => {
    event.preventDefault();
    const button = event.target;
    const task = button.parentNode;

    task.classList.contains('done') ?
        button.textContent = 'concluir' :
        button.textContent = 'desconcluir';

    task.classList.toggle('done');

}

export default ButtonDone;