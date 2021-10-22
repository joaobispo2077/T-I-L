import { Masks } from "./modules/Masks.js";
import { Person } from "./modules/Person.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const maskByElementId = {
  'cpf': Masks.formatCpf,
  'dt_nasc': Masks.formatDate,
  'fone': Masks.formatPhone,
  'cep': Masks.formatCep,
};

const formElement = $('form');

const inputNodeList = $$('input');
const inputList = Array.from(inputNodeList);


inputList.forEach(input => {
  input.addEventListener('input', ($event) => {
    const applyMaskFix = maskByElementId[input.id];
    if (!applyMaskFix) return;

    $event.target.value = applyMaskFix($event.target.value);
  });
});


formElement.addEventListener('submit', ($event) => {
  $event.preventDefault();

  const person = new Person();
  inputList.forEach(input => {
    person[input.id] = input.value;
  });

  console.log('sent person to api...', person);
});
