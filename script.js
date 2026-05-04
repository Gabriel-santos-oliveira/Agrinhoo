let contador = 0;

// Carregar preferências
window.onload = function () {
    let nomeSalvo = localStorage.getItem("nome");
    let dark = localStorage.getItem("dark");

    if (nomeSalvo) {
        document.getElementById("mensagem").innerText =
            "Bem-vindo de volta, " + nomeSalvo + " 🌱";
    }

    if (dark === "true") {
        document.getElementById("body").classList.add("dark");
    }
};

// Salvar nome
function salvarNome() {
    let nome = document.getElementById("nome").value;

    if (nome.trim() === "") {
        document.getElementById("mensagem").innerText =
            "Digite seu nome.";
        return;
    }

    localStorage.setItem("nome", nome);

    document.getElementById("mensagem").innerText =
        "Olá, " + nome + " 🌱";
}

// Mostrar conteúdo
function toggleInfo() {
    document.getElementById("extra").classList.toggle("hidden");
}

// Contador
function plantar() {
    contador++;

    document.getElementById("contador").innerText = contador;

    let progresso = contador * 10;

    if (progresso > 100) {
        progresso = 100;
    }

    document.getElementById("progresso").style.width =
        progresso + "%";
}

// Abrir sites externos
function abrirSite(url) {
    window.open(url, "_blank");
}

// Quiz
function responder(correto) {
    let resultado = document.getElementById("resultado");

    if (correto) {
        resultado.innerText = "✅ Correto!";
    } else {
        resultado.innerText = "❌ Resposta incorreta.";
    }
}

// Scroll suave
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Modo escuro
function modoEscuro() {
    let body = document.getElementById("body");

    body.classList.toggle("dark");

    localStorage.setItem(
        "dark",
        body.classList.contains("dark")
    );
}
