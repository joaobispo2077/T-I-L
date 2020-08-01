$ = document.querySelector.bind(document);

const button = $('[data-form-button]');
const list = $('.list');

button.addEventListener('click', newTask);

function newTask(event) {
    event.preventDefault();

    let input = $('[data-form-input]');

    const task = `<p class="task">${input.value}</p>`;

    list.insertAdjacentHTML('beforeend', task);

    input.value = '';
}