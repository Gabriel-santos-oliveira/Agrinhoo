// Variável global do contador
let contador = 0;

// Saudação personalizada
function saudacao() {
    let nome = document.getElementById("nome").value;
    let mensagem = document.getElementById("mensagem");

    if (nome === "") {
        mensagem.innerText = "Digite seu nome!";
    } else {
        mensagem.innerText = "Olá, " + nome + "! 🌱";
    }
}

// Mostrar ou esconder conteúdo
function toggleInfo(id) {
    let elemento = document.getElementById(id);

    if (elemento.classList.contains("hidden")) {
        elemento.classList.remove("hidden");
    } else {
        elemento.classList.add("hidden");
    }
}

// Abrir sites externos
function abrirSite(url) {
    window.open(url, "_blank");
}

// Contador de impacto
function aumentarContador() {
    contador++;
    document.getElementById("numero").innerText = contador;
}

// Rolagem suave
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Modo escuro
function modoEscuro() {
    document.getElementById("body").classList.toggle("dark");
}
