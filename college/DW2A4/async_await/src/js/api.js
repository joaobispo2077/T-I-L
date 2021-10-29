
export async function getDataFromCep(cep) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  return data;
}

export async function getCovidCasesByUf(uf) {
  return fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`)
    .then(
      (response) => response.json()
    ).then((data) => data);
}

