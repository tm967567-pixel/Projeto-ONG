const app = document.querySelector("main");

function carregarPagina(conteudo) {
    app.innerHTML = conteudo;
}

function configurarNavegacao(paginaInicio, paginaProjetos, paginaCadastro) {

    const menuBotao = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

if (menuBotao && menu) {
    menuBotao.addEventListener("click", function () {

        const aberto = menuBotao.getAttribute("aria-expanded") === "true";

        menuBotao.setAttribute("aria-expanded", String(!aberto));

        menu.classList.toggle("menu-aberto");

    });

    const projetosBotao = document.querySelector(".dropdown-titulo");
const submenu = document.querySelector(".submenu");

if (projetosBotao && submenu) {
    projetosBotao.addEventListener("click", function () {

        const aberto =
            projetosBotao.getAttribute("aria-expanded") === "true";

        projetosBotao.setAttribute(
            "aria-expanded",
            String(!aberto)
        );

        submenu.classList.toggle("submenu-aberto");

    });
}
}

    const linkInicio = document.querySelector("#link-inicio");

    if (linkInicio) {
        linkInicio.addEventListener("click", function (evento) {
            evento.preventDefault();
            paginaInicio();
        });
    }

    const linkProjetos = document.querySelector("#link-projetos");

    if (linkProjetos) {
        linkProjetos.addEventListener("click", function (evento) {
            evento.preventDefault();
            paginaProjetos();
        });
    }

    const linkCampanhas = document.querySelector("#link-campanhas");

    if (linkCampanhas) {
        linkCampanhas.addEventListener("click", function (evento) {
            evento.preventDefault();
            paginaProjetos();
        });
    }

    const linkVoluntariado = document.querySelector("#link-voluntariado");

    if (linkVoluntariado) {
        linkVoluntariado.addEventListener("click", function (evento) {
            evento.preventDefault();
            paginaProjetos();
        });
    }

    const linkCadastro = document.querySelector("#link-cadastro");

    if (linkCadastro) {
        linkCadastro.addEventListener("click", function (evento) {
            evento.preventDefault();
            paginaCadastro();
        });
    }
}

export { carregarPagina, configurarNavegacao };