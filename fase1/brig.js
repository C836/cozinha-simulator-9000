var alternativas = document.getElementById("alternativas")
var fase = document.getElementById("fase")
var descricao = document.getElementById("descricao")
var alt1 = document.getElementById("alt1")
var alt2 = document.getElementById("alt2")
var alt3 = document.getElementById("alt3")
var imagem = document.getElementById("imagem")

start()

function start() {
    setTimeout(function () {

        alert('Clique na tela para selecionar as alternativas');
        alternativas.style.display = "flex";
        descricao.innerHTML = "Você vai correndo para o mercado para fazer as compras e percebe que você esqueceu de um ingrediente! Qual dos itens a seguir está faltando?"
        alt1.innerHTML = "A - Água"
        alt2.innerHTML = "B - Leite condensado"
        alt3.innerHTML = "C - Fermento"
        imagem.src = "../imagens/c2.png";

        fase1()
    }, 3000);
}

function fase1() {
    document.getElementById("clique").onclick = function () {
        var escolha = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha.toUpperCase() == "A".toUpperCase() || (escolha.toUpperCase() == "C".toUpperCase())) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Você chega em casa e percebe que está faltando um dos itens da lista. Já que você não tem tanta experiência na cozinha, decide deixar a ideia para outro dia.";
            imagem.src = "../imagens/cf2.jpg"
            limpar()
        } else if (escolha.toUpperCase() == "B".toUpperCase()) {
            fase2();
        } else {
            fase1()
        }
    }
}

function fase2() {
    fase.innerHTML = "FASE 2";
    descricao.innerHTML = "Ao chegar em casa, com todos os ingredientes em mãos, você está pronto para por a mão na massa e começar a preparar seus brigadeiros. Qual será o próximo passo?"
    alt1.innerHTML = "A - Colocar numa panela ao fogo e deixar esquentar"
    alt2.innerHTML = "B - Adicionar o fermento e misturar"
    alt3.innerHTML = "C - Cozinhar os ingredientes e misturar no fogo"
    imagem.src = "../imagens/c3.png"

    document.getElementById("clique").onclick = function () {
        var escolha2 = prompt("Digite sua alternativa (A, B ou C)");

        if (escolha2.toUpperCase() == "A".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Você esqueceu de mexer e acabou queimando toda sua massa! Você decide deixar a ideia para outro dia.";
            imagem.src = "../imagens/cf3.jpg";
            limpar()
        } else if (escolha2.toUpperCase() == "B".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "O fermento acaba estragando a textura dos brigadeiros e você decide deixar a ideia para outro dia.";
            limpar()
            imagem.src = "../imagens/cf3.jpg"
        } else if (escolha2.toUpperCase() == "C".toUpperCase()) {
            fase3()
        } else {
            fase2()
        }
    }
}

function fase3() {
    fase.innerHTML = "FASE 3";
    descricao.innerHTML = "Após um certo tempo você percebe que a massa já está solta do fundo como indica a receita. Qual será o próximo passo?"
    alt1.innerHTML = "A - Deixar descansar no freezer"
    alt2.innerHTML = "B - Colocar num prato com margarina e deixar esfriar"
    alt3.innerHTML = "C - Começar a enrolar os docinhos"
    imagem.src = "../imagens/c4.png"

    document.getElementById("clique").onclick = function () {
        var escolha3 = prompt("Digite sua alternativa (A, B ou C)");

        if (escolha3.toUpperCase() == "A".toUpperCase()) {
            fase.innerHTML = "FINAL SECRETO";
            descricao.innerHTML = "Você deixa sua massa no freezer por um tempo e ao abrir a geladeira está tudo congelado! Você aproveita e coloca uns palitos para poder segurar. Seus picolés estão prontos!";
            imagem.src = "../imagens/cfalt.jpg"
            limpar()
        } else if (escolha3.toUpperCase() == "C".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Sua massa está fervendo! Infelizmente você acaba queimando sua mão e derrubando tudo no chão com o susto. Mais cuidado da próxima vez!";
            imagem.src = "../imagens/cf4.jpg"
            limpar()
        } else if (escolha3.toUpperCase() == "B".toUpperCase()) {
            fim()
        } else {
            fase3()
        }
    }
}

function fim() {
    fase.innerHTML = "FIM";
    descricao.innerHTML = "Depois de deixar a massa esfriar você começa a enrolar seus doces em bolinhas. Após isso, passa tudo no chocolate granulado e está pronto, parabéns! Aproveite seus brigadeiros"
    imagem.src = "../imagens/cfim.png"
    limpar()
}

function limpar() {
    alt1.style.display = "none";
    alt2.style.display = "none";
    alt3.style.display = "none";
    document.getElementById("voltar").style.display = "block";
    document.getElementById("clique").style.display = "none";
}

