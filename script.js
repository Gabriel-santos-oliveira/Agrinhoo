let contador = 0;

// Carregar nome salvo
window.onload = function() {
  let nome = localStorage.getItem("nome");

  if (nome) {
    document.getElementById("mensagem").innerText = "Bem-vindo de volta, " + nome;
  }
}

// Salvar nome
function salvarNome() {
  let nome = document.getElementById("nome").value;

  if (nome !== "") {
    localStorage.setItem("nome", nome);
    document.getElementById("mensagem").innerText = "Olá, " + nome + " 🌱";
  }
}

// Mostrar conteúdo
function toggleInfo() {
  let el = document.getElementById("extra");
  el.classList.toggle("hidden");
}

// Plantar árvore
function plantar() {
  contador++;
  document.getElementById("contador").innerText = contador;

  let progresso = contador * 10;
  if (progresso > 100) progresso = 100;

  document.getElementById("progresso").style.width = progresso + "%";
}

// Quiz
function resposta(correto) {
  let res = document.getElementById("resultado");

  if (correto) {
    res.innerText = "✅ Correto!";
  } else {
    res.innerText = "❌ Errado!";
  }
}

// Abrir links
function abrir(url) {
  window.open(url, "_blank");
}

// Scroll suave
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Modo escuro com persistência
function modoEscuro() {
  let body = document.getElementById("body");
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("dark", "true");
  } else {
    localStorage.setItem("dark", "false");
  }
}

// Carregar modo escuro
if (localStorage.getItem("dark") === "true") {
  document.getElementById("body").classList.add("dark");
}
