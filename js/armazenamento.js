function salvarCadastro(cadastro) {
    localStorage.setItem(
        "cadastro",
        JSON.stringify(cadastro)
    );
}

function obterCadastro() {
    const dadosSalvos = localStorage.getItem("cadastro");

    if (!dadosSalvos) {
        return null;
    }

    return JSON.parse(dadosSalvos);
}

export { salvarCadastro, obterCadastro };