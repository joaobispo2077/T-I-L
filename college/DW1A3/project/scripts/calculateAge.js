class Pessoa {
  constructor(name, cpf, dataNascimento) {
    this.nome = name;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.idade = null;
  }

  calculateAgeByBirthdate() {
    const today = new Date();
    const birthdate = new Date(this.dataNascimento);
    const age = today.getFullYear() - birthdate.getFullYear();

    const monthBirthdate = birthdate.getMonth() + 1;
    const monthToday = today.getMonth() + 1;

    this.idade = age;

    const isBirthMonthMajorThanActualMonth = monthBirthdate > monthToday;
    if (isBirthMonthMajorThanActualMonth) {
      --this.idade;
    }

    const isSameMonth = monthBirthdate === monthToday;
    if (isSameMonth) {
      const dayBirthdate = birthdate.getDate();
      const dayToday = today.getDate();

      const isBirthDayMajorThanActualDay = dayBirthdate > dayToday;
      if (isBirthDayMajorThanActualDay) {
        --this.idade;
      }
    }

  }
}

const getUserInfoFromScreen = () => {
  const name = document.getElementById('name').value;
  const cpf = document.getElementById('cpf').value;
  const birthdate = document.getElementById('birthdate').value;

  return { name, cpf, birthdate }
};

const showPersonIntoScreen = (person) => {
  console.log(person)
  const name = document.getElementById('showName');
  const cpf = document.getElementById('showCpf');
  const birthdate = document.getElementById('showBirthdate');
  const age = document.getElementById('showAge');

  name.innerHTML = person.nome;
  birthdate.innerHTML = person.dataNascimento;
  cpf.innerHTML = person.cpf;
  age.innerHTML = person.idade;

  document.getElementById('age_result').classList.remove('invisible');
}


const handleCalculateAge = (event) => {
  event.preventDefault();

  const { name, cpf, birthdate } = getUserInfoFromScreen();

  const person = new Pessoa(name, cpf, birthdate);
  person.calculateAgeByBirthdate();

  showPersonIntoScreen(person);
};

(function () {
  const formAge = document.querySelector("#form__idade");
  formAge.addEventListener('submit', handleCalculateAge);
})();
