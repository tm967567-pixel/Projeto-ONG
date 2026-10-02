import {
    carregarPagina,
    configurarNavegacao
} from "./navegacao.js";

import {
    gerarProjetos
} from "./projetos.js";

import {
    paginaCadastro
} from "./formulario.js";

import {
    configurarTema
} from "./tema.js";


function paginaInicio() {

    carregarPagina(`

        <section>
            <h2>Quem somos</h2>
            <p>
                Somos uma organização dedicada a promover ações sociais
                e contribuir para uma sociedade mais justa e solidária.
            </p>
        </section>

        <section>
            <h2>Nossa missão</h2>
            <p>
                Nossa missão é promover o bem-estar social por meio de projetos,
                ações voluntárias e iniciativas que contribuam para a comunidade.
            </p>
        </section>

        <section>
            <h2>Nossa atuação</h2>
            <img src="/ong.webp" alt="Voluntários da ONG realizando uma ação social">
            <p>
                Atuamos por meio de projetos sociais e ações voluntárias,
                buscando transformar a realidade da comunidade.
            </p>
        </section>

        <section>
            <h2>Entre em contato</h2>
            <p>E-mail: contato@projetoong.org</p>
            <p>Telefone: (61) 99999-9999</p>
            <p>Endereço: Brasília - DF</p>
        </section>

    `);
}


function paginaProjetos() {

    const projetosHTML = gerarProjetos();

    carregarPagina(`

        <section>
            <h2>Conheça nossos projetos</h2>
            <p>
                Nossos projetos sociais são desenvolvidos para apoiar a comunidade
                e promover oportunidades para pessoas que precisam de apoio.
            </p>
        </section>

        <section class="projetos">

            <h2>Projetos e iniciativas</h2>

            ${projetosHTML}

        </section>

        <div class="alerta" role="alert">
            <strong>Informação:</strong>
            As doações ajudam a manter nossos projetos e possibilitam novas ações.
        </div>

        <section>
            <h2>Campanhas de doação</h2>
            <p>
                As doações ajudam a manter nossos projetos e possibilitam a
                realização de novas ações em benefício da comunidade.
            </p>
        </section>

        <section>
            <h2>Voluntariado</h2>
            <p>
                Pessoas interessadas podem participar como voluntárias,
                contribuindo com seu tempo, conhecimentos e habilidades
                nas ações realizadas pela ONG.
            </p>
        </section>

    `);
}


configurarNavegacao(
    paginaInicio,
    paginaProjetos,
    paginaCadastro
);

configurarTema();