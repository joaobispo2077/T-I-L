import { getCovidCasesByUf, getDataFromCep } from "./api.js";
import { formatCep } from "./utils.js";

const $ = document.querySelector.bind(document);

const cepInput = $('#cep');
const cepForm = $('#cepForm');

cepInput.addEventListener('input', async (event) => {



  // const { logradouro, bairro, localidade, uf } = data;
  // $('#logradouro').value = logradouro;
  // $('#bairro').value = bairro;
  // $('#localidade').value = localidade;
  // $('#uf').value = uf;
  event.target.value = formatCep(event.target.value);
});

cepForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const cep = cepInput.value.replace('-', '');

  if (cep.length !== 8) {
    return;
  }

  try {

    const data = await getDataFromCep(cep);
    const { logradouro, bairro, localidade, uf } = data;
    $('#logradouro').value = logradouro;
    $('#bairro').value = bairro;
    $('#cidade').value = localidade;
    $('#uf').value = uf;


    alert('Dados do cep carregados com sucesso!');
  } catch (e) {
    alert('CEP não encontrado!');
  }

  getCovidCasesByUf($('#uf').value).then(({
    cases,
    deaths,
    suspects,
  }) => {
    $('#cases').value = cases;
    $('#deaths').value = deaths;
    $('#suspects').value = suspects;

    alert('Dados de covid carregados com sucesso');
  }).catch(err => {
    alert('Erro ao carregar casos de covid do estado');
  });
});
