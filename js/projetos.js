const projetos = [
    {
        nome: "Projeto de apoio à comunidade",
        status: "Ativo",
        descricao:
            "Desenvolvemos ações para oferecer apoio e melhorar a qualidade de vida das pessoas da comunidade."
    },
    {
        nome: "Ações de arrecadação",
        status: "",
        descricao:
            "Realizamos campanhas para arrecadar alimentos, roupas e outros recursos destinados às pessoas que precisam."
    }
];

function gerarProjetos() {
    return projetos.map(function (projeto) {

        return `
            <article>
                <h3>${projeto.nome}</h3>

                ${projeto.status ? `<span class="badge">${projeto.status}</span>` : ""}

                <p>
                    ${projeto.descricao}
                </p>
            </article>
        `;

    }).join("");
}

export { projetos, gerarProjetos };