const root = document.querySelector('#root');

const title = '<h1>Dificuldade</h1>';

root.insertAdjacentHTML('beforeBegin', title);

const newElement = (tag, content) => {
    const tagHTML = `<${tag}>${content}</${tag}`
    root.insertAdjacentHTML('beforeBegin', tagHTML);
    return console.log('deubom');
}

newElement('p', 'teste');