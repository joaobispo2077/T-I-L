const getInfoFromScreen = () => {
  const time = Number(document.getElementById('time').value);
  const licensePlate = document.getElementById('licensePlate').value;
  const value = Number(document.getElementById('value').value.replace(',', '.'));

  return { time, licensePlate, value };
};

const showResultIntoScreen = (cash, time, licensePlate, value) => {
  const showCash = document.getElementById('showCash');
  const showLicensePlate = document.getElementById('showLicensePlate');
  const showTime = document.getElementById('showTime');
  const showMoney = document.getElementById('showMoney');

  showCash.innerHTML = cash;
  showLicensePlate.innerHTML = licensePlate;
  showTime.innerHTML = time;
  showMoney.innerHTML = value;

  document.querySelector('.not_enough').classList.add('invisible');
  document.getElementById('parquimetro_table').classList.add('invisible');
  document.getElementById('currency_result').classList.remove('invisible');
}

const calculateCurrency = (time, value) => {
  let cash;

  if (time > 0 && time <= 30) {
    cash = value - 1;
  }

  if (time > 30 && time <= 60) {
    cash = value - 1.75;
  }

  if (time > 60 && time <= 120) {
    cash = value - 3;
  }

  if (cash < 0) {
    throw new Error('Insufficient currency.');
  }

  return cash;
}

const storeItems = (cash, time, licensePlate, value) => {
  localStorage.setItem("cash", cash);
  localStorage.setItem("time", time);
  localStorage.setItem("licensePlate", licensePlate);
  localStorage.setItem("value", value);
}

const handleCalculateCurrency = (event) => {
  try {
    event.preventDefault();

    const { time, licensePlate, value } = getInfoFromScreen();

    const cash = calculateCurrency(time, value);

    showResultIntoScreen(cash, time, licensePlate, value);
    storeItems(cash, time, licensePlate, value);
  } catch (error) {
    if (error.message === "Insufficient currency.") {
      document.querySelector('.not_enough').classList.remove('invisible');
    }
  }
};

(function () {
  const formAge = document.querySelector("#form__parquimetro");
  formAge.addEventListener('submit', handleCalculateCurrency);
})();
