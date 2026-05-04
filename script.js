// Variável contador
let contador = 0;

// Carregar nome salvo
window.onload = function () {
    const nomeSalvo = localStorage.getItem("nome");

    if (nomeSalvo) {
        document.getElementById("mensagem").innerText =
            "Bem-vindo(a) novamente, " + nomeSalvo + " 🌱";
    }

    // Carregar dark mode
    if (localStorage.getItem("darkMode") === "true") {
        document.getElementById("body").classList.add("dark");
    }
};

// Salvar nome
function salvarNome() {
    const nome = document.getElementById("nome").value.trim();
    const mensagem = document.getElementById("mensagem");

    if (nome === "") {
        mensagem.innerText = "Digite seu nome!";
        return;
    }

    localStorage.setItem("nome", nome);
    mensagem.innerText = "Olá, " + nome + "! 🌱";
}

// Mostrar informação extra
function mostrarInfo() {
    document.getElementById("infoExtra").classList.toggle("hidden");
}

// Plantar árvore
function plantarArvore() {
    contador++;
    document.getElementById("contador").innerText = contador;

    let progresso = contador * 10;
    if (progresso > 100) progresso = 100;

    document.getElementById("barra").style.width = progresso + "%";
}

// Abrir links externos
function abrirSite(url) {
    window.open(url, "_blank");
}

// Quiz
function responderQuiz(correto) {
    const resultado = document.getElementById("resultadoQuiz");

    if (correto) {
        resultado.innerText = "✅ Resposta correta!";
    } else {
        resultado.innerText = "❌ Resposta incorreta!";
    }
}

// Scroll suave
function scrollSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Modo escuro
function modoEscuro() {
    const body = document.getElementById("body");
    body.classList.toggle("dark");

    localStorage.setItem(
        "darkMode",
        body.classList.contains("dark")
    );
}
