function configurarTema() {

    const botaoTema = document.querySelector("#botao-tema");

    if (!botaoTema) {
        return;
    }

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("modo-escuro");
        atualizarBotao(botaoTema, true);
    }

    botaoTema.addEventListener("click", function () {

        const modoEscuroAtivo =
            document.body.classList.toggle("modo-escuro");

        localStorage.setItem(
            "tema",
            modoEscuroAtivo ? "escuro" : "claro"
        );

        atualizarBotao(botaoTema, modoEscuroAtivo);
    });
}


function atualizarBotao(botaoTema, modoEscuroAtivo) {

    if (modoEscuroAtivo) {

        botaoTema.textContent = "☀️ Modo claro";
        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );
        botaoTema.setAttribute(
            "aria-pressed",
            "true"
        );

    } else {

        botaoTema.textContent = "🌙 Modo escuro";
        botaoTema.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );
        botaoTema.setAttribute(
            "aria-pressed",
            "false"
        );
    }
}


export { configurarTema };