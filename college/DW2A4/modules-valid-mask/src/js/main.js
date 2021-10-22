import { Masks } from "./modules/Masks.js";
import { Person } from "./modules/Person.js";
import { PersonForm } from "./modules/validations/PersonForm.js";
import { isAccordingRegex } from "./utils/regex.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const maskByElementId = {
  cpf: Masks.formatCpf,
  dt_nasc: Masks.formatDate,
  fone: Masks.formatPhone,
  cep: Masks.formatCep,
};

const validationRegexByElementId = {
  cpf: PersonForm.validateCpf,
  dt_nasc: PersonForm.validateBirthday,
  fone: PersonForm.validatePhoneNumber,
  cep: PersonForm.validateCep,
  email: PersonForm.validateEmail,
};

const formElement = $('form');

const inputNodeList = $$('input');
const inputList = Array.from(inputNodeList);


inputList.forEach(input => {
  input.addEventListener('input', ($event) => {
    const applyValidation = validationRegexByElementId[input.id];

    if (!applyValidation) {
      return;
    } else {
      const isValid = applyValidation($event.target.value);
      isValid ? input.classList.remove('errorInput') : input.classList.add('errorInput');
    };

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
