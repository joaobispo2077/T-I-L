const root = document.querySelector('#root');
const textContent = 'Dificuldade';
const textSmall = 'Text pequeno'
const otherText = 'Outro texto'

const title = Title`
color: red;
${textContent}
font-size: 50px;
${textSmall}
${otherText}
`
console.log(title);


root.insertAdjacentHTML('beforeend', title); 

/* AULA 01

const title = '<h1>Dificuldade</h1>';

root.insertAdjacentHTML('beforeBegin', title);

const newElement = (tag, content) => {
    const tagHTML = `<${tag}>${content}</${tag}>`
    root.insertAdjacentHTML('beforeBegin', tagHTML);
    return console.log('deubom');
}

newElement('p', 'teste');

*/


/* AULA 02
minuto 47 errei
*/