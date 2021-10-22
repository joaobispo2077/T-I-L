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

const person = new Person();

inputList.forEach(input => {
  input.addEventListener('input', ($event) => {
    person[input.id] = $event.target.value;

    const applyMaskFix = maskByElementId[input.id];
    if (!applyMaskFix) return;

    $event.target.value = applyMaskFix($event.target.value);
    person[input.id] = $event.target.value;
  });
});


formElement.addEventListener('submit', ($event) => {
  $event.preventDefault();

  console.log('sent person to api...', person);
});
