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
        descricao.innerHTML = "Ao chegar no mercado você percebe que esqueceu um dos itens da lista! Qual dos itens a seguir NÃO faz parte da sua receita?"
        alt1.innerHTML = "A - Creme de leite"
        alt2.innerHTML = "B - Leite"
        alt3.innerHTML = "C - Fermento"
        imagem.src = "../imagens/c2.png";

        fase1()
    }, 3000);
}

function fase1() {
    document.getElementById("clique").onclick = function () {
        var escolha = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha.toUpperCase() == "A".toUpperCase() || escolha.toUpperCase() == "B".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Ao chegar em casa, você percebe que acabou comprando o ingrediente errado! Você decide deixar a ideia para outro dia.";
            imagem.src = "../imagens/pf3.jpg"
            limpar()
        } else if (escolha.toUpperCase() == "C".toUpperCase()) {
            fase2();
        } else {
            fase1()
        }
    }
}

function fase2() {
    fase.innerHTML = "FASE 2";
    descricao.innerHTML = "Com todos os ingredientes em mãos, você separa o leite condensado, as gemas dos ovos, o amido de milho e o leite. Qual será o primeiro passo?"
    alt1.innerHTML = "A - Mexer um pouco e colocar na geladeira até endurecer"
    alt2.innerHTML = "B - Adicionar o creme de leite e misturar"
    alt3.innerHTML = "C - Misturar numa panela ao fogo e reservar"
    imagem.src = "../imagens/a3.jpg"

    document.getElementById("clique").onclick = function () {
        var escolha2 = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha2.toUpperCase() == "A".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Você simplesmente esquece sua receita no fundo da geladeira e só vai achar alguns dias depois. Você desiste da ideia.";
            imagem.src = "../imagens/af2.png"
            limpar()
        } else if (escolha2.toUpperCase() == "B".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Você vai olhar a receita e percebe que pulou alguns passos. Você decide guardar o resto dos ingredientes e deixa a ideia para outro dia";
            imagem.src = "../imagens/af3.png"
            limpar()
        } else if (escolha2.toUpperCase() == "C".toUpperCase()) {
            fase3()
        } else {
            fase2()
        }
    }
}

function fase3() {
    fase.innerHTML = "FASE 3";
    descricao.innerHTML = "Após ficar consistente, como preparar o segundo creme?"
    alt1.innerHTML = "A - Adicionar o chocolate ao outro creme"
    alt2.innerHTML = "B - Misturar leite condensado com um pouco de margarina e chocolate"
    alt3.innerHTML = "C - Misturar o leite condensado com o chocolate e deixar no fogo"
    imagem.src = "../imagens/a4.jpg"

    document.getElementById("clique").onclick = function () {
        var escolha3 = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha3.toUpperCase() == "A".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "O chocolate não faz parte da massa nessa receita!";
            imagem.src = "../imagens/af4.png"
            limpar()
        } else if (escolha3.toUpperCase() == "C".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Você acaba esquecendo o creme no fogo, que acaba queimando. Você decide deixar a ideia pra outro dia.";
            imagem.src = "../imagens/af5.jpg"
            limpar()
        } else if (escolha3.toUpperCase() == "B".toUpperCase()) {
            fase4()
        } else {
            fase3()
        }
    }
}

function fase4() {
    fase.innerHTML = "FASE 4";
    descricao.innerHTML = 'E para terminar o segundo creme...'
    alt1.innerHTML = "A - Levar ao fogo"
    alt2.innerHTML = "B - Começar a montar!"
    alt3.innerHTML = "C - Deixar na geladeira por 1 hora"
    imagem.src = "../imagens/a4.png"

    document.getElementById("clique").onclick = function () {
        var escolha4 = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha4.toUpperCase() == "B".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Por pouco... Tente novamente!";
            imagem.src = "../imagens/a4f.jpg"
            limpar()
        } else if (escolha4.toUpperCase() == "C".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "O creme não ficou na consistência certa. Tente novamente!";
            imagem.src = "../imagens/a4f.jpg"
            limpar()
        } else if (escolha4.toUpperCase() == "A".toUpperCase()) {
            fim()
        } else {
            fase4()
        }
    }
}

function fim() {
    fase.innerHTML = "FIM";
    descricao.innerHTML = "Após terminar as duas camadas, você termina de montar com os cremes, os biscoitos e raspas de chocolate para decorar. Após deixar no congelador por algumas horas... Seu pavê de chocolate está pronto!"
    imagem.src = "../imagens/afim.jpg"
    limpar()
}

function limpar() {
    alt1.style.display = "none";
    alt2.style.display = "none";
    alt3.style.display = "none";
    document.getElementById("voltar").style.display = "block";
    document.getElementById("clique").style.display = "none";
}

