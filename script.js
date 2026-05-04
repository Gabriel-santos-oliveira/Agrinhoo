let contador = 0;

// Carregar dados
window.onload = function () {
    let nome = localStorage.getItem("nome");
    let dark = localStorage.getItem("dark");

    if (nome) {
        document.getElementById("mensagem").innerText =
            "Bem-vindo de volta, " + nome + " 🌱";
    }

    if (dark === "true") {
        document.getElementById("body").classList.add("dark");
    }
};

// Nome
function salvarNome() {
    let nome = document.getElementById("nome").value;

    if (nome === "") {
        document.getElementById("mensagem").innerText =
            "Digite seu nome!";
        return;
    }

    localStorage.setItem("nome", nome);

    document.getElementById("mensagem").innerText =
        "Olá, " + nome + " 🌱";
}

// Mostrar info
function toggleInfo() {
    document.getElementById("extra").classList.toggle("hidden");
}

// Contador
function plantar() {
    contador++;

    document.getElementById("contador").innerText = contador;

    let progresso = contador * 10;
    if (progresso > 100) progresso = 100;

    document.getElementById("progresso").style.width =
        progresso + "%";
}

// Links
function abrirSite(url) {
    window.open(url, "_blank");
}

// Quiz
function responder(correto) {
    let res = document.getElementById("resultado");

    if (correto) {
        res.innerText = "✅ Correto!";
    } else {
        res.innerText = "❌ Errado!";
    }
}

// Scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Modo escuro
function modoEscuro() {
    let body = document.getElementById("body");
    body.classList.toggle("dark");

    localStorage.setItem("dark", body.classList.contains("dark"));
}
