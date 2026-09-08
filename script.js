const formulario = document.getElementById("formSolicitacao");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("servico").value;
    const projeto = document.getElementById("projeto").value;

    const mensagem =
        "Olá! Gostaria de solicitar um serviço.%0A%0A" +
        "Nome: " + encodeURIComponent(nome) + "%0A" +
        "Serviço: " + encodeURIComponent(servico) + "%0A" +
        "Descrição do projeto: " + encodeURIComponent(projeto);

    const whatsapp = "https://wa.me/5538984329800?text=" + mensagem;

    window.open(whatsapp, "_blank");
});

const parametros = new URLSearchParams(window.location.search);
const servicoSelecionado = parametros.get("servico");

if (servicoSelecionado === "aplicativo") {
    document.getElementById("servico").value =
        "Desenvolvimento de Aplicativo";
}

if (servicoSelecionado === "site") {
    document.getElementById("servico").value = "Site Profissional";
}

if (servicoSelecionado === "loja") {
    document.getElementById("servico").value = "Loja Virtual";
}

if (servicoSelecionado === "sistema") {
    document.getElementById("servico").value = "Sistema Personalizado";
}

if (servicoSelecionado === "automacao") {
    document.getElementById("servico").value = "Automação";
}

if (servicoSelecionado === "manutencao") {
    document.getElementById("servico").value = "Manutenção";
}