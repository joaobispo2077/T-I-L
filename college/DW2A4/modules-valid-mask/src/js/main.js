import { Masks } from "./modules/Masks.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const maskByElementId = {
  'cpf': Masks.formatCpf,
  'dt_nasc': Masks.formatDate,
  'fone': Masks.formatPhone,
  'cep': Masks.formatCep,
};

const inputNodeList = $$('input');
const inputList = Array.from(inputNodeList);


inputList.forEach(input => {
  input.addEventListener('input', ($event) => {
    console.log(input.id, input.value);
    const applyMaskFix = maskByElementId[input.id];
    if (!applyMaskFix) return;

    $event.target.value = applyMaskFix($event.target.value);
  });
});
