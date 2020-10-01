const toggleXXS = (isXxsEnabled, xxsButton, title) => {

    isXxsEnabled ?
        isXxsEnabled = disabledXXS(isXxsEnabled, xxsButton, title) :
        isXxsEnabled = activatedXXS(isXxsEnabled, xxsButton, title);

    return isXxsEnabled;

}

function disabledXXS(isXxsEnabled, xxsButton, title) {
    isXxsEnabled = false;
    xxsButton.textContent = 'Ativar modo XXS';
    title.classList.remove('title-xxs')

    xxsButton.classList.remove('button-xxs-green');
    xxsButton.classList.add('button-xxs-purple');
    alert("Você desativou o modo XXS, agora os seus XXS serão sanitizados e não vão funcionar mais. \n \n \n \n \n(Dependendo do contexto não é bacana a utilização de alert por ser 'blockante', mas isso é um assunto para outro momento ;)");
    return isXxsEnabled;
}

function activatedXXS(isXxsEnabled, xxsButton, title) {
    isXxsEnabled = true;
    xxsButton.textContent = 'Desativar modo XXS';
    title.classList.add('title-xxs')

    xxsButton.classList.add('button-xxs-green');

    alert("Você ativou o modo XXS, insira algum XXS no input para testar os seus XXS!");
    return isXxsEnabled;
}

export default toggleXXS;