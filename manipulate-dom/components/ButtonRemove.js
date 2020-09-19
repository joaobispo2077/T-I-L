import Button from "./Button.js";

const ButtonRemove = (text, style) => {
    const buttonRemove = Button(text, style);

    buttonRemove.addEventListener('click', deleteTask);

    return buttonRemove;
}

const deleteTask = (event) => {
    const deletedItem = event.target.parentElement;

    deletedItem.remove();
}

export default ButtonRemove;