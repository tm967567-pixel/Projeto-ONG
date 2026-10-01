import { carregarPagina } from "./navegacao.js";
import { salvarCadastro, obterCadastro } from "./armazenamento.js";

function paginaCadastro() {

    carregarPagina(`

        <h2>Cadastre-se</h2>

        <p>
            Preencha o formulário abaixo para participar das ações e iniciativas
            da nossa ONG.
        </p>

        <form action="#" method="post" id="form-cadastro" novalidate>

            <fieldset>

                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo:</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                >

                <br><br>

                <label for="cpf">CPF:</label>
                <input
                    type="text"
                    id="cpf"
                    name="cpf"
                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                    placeholder="000.000.000-00"
                    required
                >

                <br><br>

                <label for="nascimento">Data de nascimento:</label>
                <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    required
                >

            </fieldset>

            <fieldset>

                <legend>Dados de contato</legend>

                <label for="email">E-mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                >

                <br><br>

                <label for="telefone">Telefone:</label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                    placeholder="(00) 00000-0000"
                    required
                >

            </fieldset>

            <fieldset>

                <legend>Endereço</legend>

                <label for="endereco">Endereço:</label>
                <input
                    type="text"
                    id="endereco"
                    name="endereco"
                    required
                >

                <br><br>

                <label for="cep">CEP:</label>
                <input
                    type="text"
                    id="cep"
                    name="cep"
                    pattern="[0-9]{5}-[0-9]{3}"
                    placeholder="00000-000"
                    required
                >

                <br><br>

                <label for="cidade">Cidade:</label>
                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                >

                <br><br>

                <label for="estado">Estado:</label>
                <input
                    type="text"
                    id="estado"
                    name="estado"
                    required
                >

            </fieldset>

            <button type="submit">Enviar cadastro</button>

        </form>

    `);

    carregarCadastro();
    configurarFormulario();
}


function validarCampo(campo, mensagem) {

    const mensagemExistente = campo.nextElementSibling;

    if (
        mensagemExistente &&
        mensagemExistente.classList.contains("mensagem-erro")
    ) {
        mensagemExistente.remove();
    }

    campo.classList.remove("campo-erro");
    campo.classList.remove("campo-sucesso");

    const idMensagem = `${campo.id}-erro`;

    if (campo.value.trim() === "") {

        campo.classList.add("campo-erro");

        campo.setAttribute("aria-invalid", "true");
        campo.setAttribute("aria-describedby", idMensagem);

        campo.insertAdjacentHTML(
            "afterend",
            `
                <span
                    id="${idMensagem}"
                    class="mensagem-erro"
                    role="alert"
                >
                    ${mensagem}
                </span>
            `
        );

        return false;
    }

    if (!campo.checkValidity()) {

        campo.classList.add("campo-erro");

        campo.setAttribute("aria-invalid", "true");
        campo.setAttribute("aria-describedby", idMensagem);

        campo.insertAdjacentHTML(
            "afterend",
            `
                <span
                    id="${idMensagem}"
                    class="mensagem-erro"
                    role="alert"
                >
                    ${mensagem}
                </span>
            `
        );

        return false;
    }

    campo.classList.add("campo-sucesso");

    campo.setAttribute("aria-invalid", "false");
    campo.removeAttribute("aria-describedby");

    return true;
}


function configurarFormulario() {

    const formulario = document.querySelector("#form-cadastro");

    if (formulario) {

        const campos = formulario.querySelectorAll("input");

        campos.forEach(function (campo) {

            campo.addEventListener("input", function () {

                validarCampo(
                    campo,
                    obterMensagemErro(campo)
                );

            });

        });

        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            let formularioValido = true;

            campos.forEach(function (campo) {

                const campoValido = validarCampo(
                    campo,
                    obterMensagemErro(campo)
                );

                if (!campoValido) {
                    formularioValido = false;
                }

            });

            if (!formularioValido) {
                return;
            }

            const cadastro = {

                nome: document.querySelector("#nome").value.trim(),

                email: document.querySelector("#email").value.trim(),

                cpf: document.querySelector("#cpf").value.trim(),

                telefone: document.querySelector("#telefone").value.trim(),

                nascimento: document.querySelector("#nascimento").value,

                endereco: document.querySelector("#endereco").value.trim(),

                cep: document.querySelector("#cep").value.trim(),

                cidade: document.querySelector("#cidade").value.trim(),

                estado: document.querySelector("#estado").value.trim()

            };

            salvarCadastro(cadastro);

            const mensagem = document.querySelector(".alerta");

            if (mensagem) {
                mensagem.remove();
            }

            formulario.insertAdjacentHTML(
                "beforebegin",
                `
                    <div class="alerta" role="alert">
                        <strong>Sucesso:</strong>
                        Cadastro enviado com sucesso!
                    </div>
                `
            );

        });

    }

}


function obterMensagemErro(campo) {

    if (campo.id === "nome") {
        return "Digite seu nome completo.";
    }

    if (campo.id === "cpf") {
        return "Digite o CPF no formato 000.000.000-00.";
    }

    if (campo.id === "nascimento") {
        return "Informe sua data de nascimento.";
    }

    if (campo.id === "email") {
        return "Digite um e-mail válido.";
    }

    if (campo.id === "telefone") {
        return "Digite o telefone no formato (00) 00000-0000.";
    }

    if (campo.id === "endereco") {
        return "Digite seu endereço.";
    }

    if (campo.id === "cep") {
        return "Digite o CEP no formato 00000-000.";
    }

    if (campo.id === "cidade") {
        return "Digite sua cidade.";
    }

    if (campo.id === "estado") {
        return "Digite seu estado.";
    }

    return "Preencha este campo corretamente.";
}


function carregarCadastro() {

    const cadastro = obterCadastro();

    if (cadastro) {

        document.querySelector("#nome").value =
            cadastro.nome || "";

        document.querySelector("#email").value =
            cadastro.email || "";

        document.querySelector("#cpf").value =
            cadastro.cpf || "";

        document.querySelector("#telefone").value =
            cadastro.telefone || "";

        document.querySelector("#nascimento").value =
            cadastro.nascimento || "";

        document.querySelector("#endereco").value =
            cadastro.endereco || "";

        document.querySelector("#cep").value =
            cadastro.cep || "";

        document.querySelector("#cidade").value =
            cadastro.cidade || "";

        document.querySelector("#estado").value =
            cadastro.estado || "";

    }

}


export { paginaCadastro };