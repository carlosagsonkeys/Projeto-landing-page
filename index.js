// Obtém os elementos HTML pelos seus IDs e os armazena em variáveis
var setaesquerda = document.getElementById("seta-esquerda"); // Seta para a esquerda
var setadireita = document.getElementById("seta-direita"); // Seta para a direita
var leonardo = document.getElementById("leonardo"); // Card de Leonardo
var samanta = document.getElementById("samanta"); // Card de Samanta
var bruna = document.getElementById("bruna"); // Card de Bruna

// Função para rolar os cards para a direita
function RolarParaDireita() {
    leonardo.style.display = "none"; // Oculta o card de Leonardo
    bruna.style.display = "flex"; // Exibe o card de Bruna
    setadireita.style.display = "none"; // Oculta a seta para a direita
    setaesquerda.style.display = "flex"; // Exibe a seta para a esquerda
    setaesquerda.style.marginTop = "55px"; // Ajusta a margem superior da seta para a esquerda
}

// Função para rolar os cards para a esquerda
function RolarParaEsquerda() {
    leonardo.style.display = "flex"; // Exibe o card de Leonardo
    bruna.style.display = "none"; // Oculta o card de Bruna
    setadireita.style.display = "flex"; // Exibe a seta para a direita
    setaesquerda.style.display = "none"; // Oculta a seta para a esquerda
}
