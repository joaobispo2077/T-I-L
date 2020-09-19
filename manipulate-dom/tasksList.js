( () => {

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
        const button = event.target;
        const task = button.parentNode;

        task.classList.contains('done') ? 
        button.textContent = 'concluir' :
        button.textContent = 'desconcluir';

        task.classList.toggle('done');
        
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

})()