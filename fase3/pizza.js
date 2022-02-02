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
        descricao.innerHTML = "Ao chegar no mercado, você percebe que o estoque de óleo acabou! Qual outro ingrediente poderá substituir o óleo?"
        alt1.innerHTML = "A - Azeite"
        alt2.innerHTML = "B - Leite"
        alt3.innerHTML = "C - Ketchup"
        imagem.src = "../imagens/p2.jpg";

        fase1()
    }, 3000);
}

function fase1() {
    document.getElementById("clique").onclick = function () {
        var escolha = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha.toUpperCase() == "C".toUpperCase() || escolha.toUpperCase() == "B".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Seu ingrediente acaba afetando a consistência da massa. Você decide deixar a ideia para outro dia.";
            imagem.src = "../imagens/pf2.jpg";
            limpar()
        } else if (escolha.toUpperCase() == "A".toUpperCase()) {
            fase2();
        } else {
            fase1()
        }
    }
}

function fase2() {
    fase.innerHTML = "FASE 2";
    descricao.innerHTML = "Ao chegar em casa com todos os ingredientes em mãos, você começa a preparar sua massa. Qual será o primeiro passo?"
    alt1.innerHTML = "A - Dissolver o fermento, misturando com sal, açúcar e a água morna"
    alt2.innerHTML = "B - Misturar todos os ingredientes numa panela ao fogo"
    alt3.innerHTML = "C - Misturar o sal, o açúcar, e a farinha"
    imagem.src = "../imagens/p3.png"

    document.getElementById("clique").onclick = function () {
        var escolha2 = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha2.toUpperCase() == "B".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Sua falta de paciência estragou toda sua massa! Seus ingredientes acabaram então você decide deixar a ideia para outro dia.";
            imagem.src = "../imagens/pf3.jpg"
            limpar()
        } else if (escolha2.toUpperCase() == "C".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Você esqueceu do fermento!";
            imagem.src = "../imagens/pf3.jpg"
            limpar()
        } else if (escolha2.toUpperCase() == "A".toUpperCase()) {
            fase3()
        } else {
            fase2()
        }
    }
}

function fase3() {
    fase.innerHTML = "FASE 3";
    descricao.innerHTML = "O fermento já se dissolveu completamente, qual será o próximo passo?"
    alt1.innerHTML = "A - Deixar a massa descansar"
    alt2.innerHTML = "B - Deixar no forno por 30 minutos"
    alt3.innerHTML = "C - Adicionar a farinha de trigo, o azeite, e misturar"
    imagem.src = "../imagens/p4.png"

    document.getElementById("clique").onclick = function () {
        var escolha3 = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha3.toUpperCase() == "A".toUpperCase() || escolha3.toUpperCase() == "B".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Você esqueceu do resto dos ingredientes! A textura da massa não ficou muito boa então você decide deixar a ideia para outro dia.";
            imagem.src = "../imagens/pf4.jpg"
            limpar()
        } else if (escolha3.toUpperCase() == "C".toUpperCase()) {
            fase4()
        } else {
            fase3()
        }
    }
}

function fase4() {
    fase.innerHTML = "FASE 4";
    descricao.innerHTML = 'Sua massa já está com uma "cara" boa! Qual será o próximo passo?'
    alt1.innerHTML = "A - Deixar no forno por 30 minutos"
    alt2.innerHTML = "B - Deixar a massa crescer por alguns minutos."
    alt3.innerHTML = "C - Adicionar mais fermento, para cresce a massa ainda mais."
    imagem.src = "../imagens/p5.jpg"

    document.getElementById("clique").onclick = function () {
        var escolha4 = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha4.toUpperCase() == "A".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Você não deixou a massa descansar e acabou ficando muito borrachuda. Você decide deixar a ideia para outro dia.";
            imagem.src = "../imagens/pf2.jpg"
            limpar()
        } else if (escolha4.toUpperCase() == "C".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "O excesso de fermento acaba estragando a textura da sua massa e deixando amarga demais. Você decide deixar a ideia para outro dia.";
            imagem.src = "../imagens/pf5.jpg"
            limpar()
        } else if (escolha4.toUpperCase() == "B".toUpperCase()) {
            fase5()
        } else {
            fase4()
        }
    }
}

function fase5() {
    fase.innerHTML = "FASE 5";
    descricao.innerHTML = "Sua massa já está com uma boa consistência, o que fazer em seguida?"
    alt1.innerHTML = "A - Deixar no freezer por um tempo"
    alt2.innerHTML = "B - Sovar a massa, abrir e preaquecer no forno"
    alt3.innerHTML = "C - Levar ao forno na temperatura mais alta para aquecer mais rápido."
    imagem.src = "../imagens/p6.jpg"

    document.getElementById("clique").onclick = function () {
        var escolha5 = prompt("Digite sua alternativa (A, B ou C)")

        if (escolha5.toUpperCase() == "A".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Você esquece da existência da pizza e só vai lembrar 2 semana depois. Você desiste completamente da ideia.";
            imagem.src = "../imagens/pf6.png"
            limpar()
        } else if (escolha5.toUpperCase() == "C".toUpperCase()) {
            fase.innerHTML = "FIM DE JOGO";
            descricao.innerHTML = "Sua massa acabou ficando crua. Cozinhar requer paciência!";
            imagem.src = "../imagens/pf6.png"
            limpar()
        } else if (escolha5.toUpperCase() == "B".toUpperCase()) {
            fim()
        } else {
            fase5()
        }
    }
}

function fim() {
    fase.innerHTML = "FIM";
    descricao.innerHTML = "Após isso, você termina de rechear e coloca no forno por alguns minutos. Sua deliciosa pizza está pronta!"
    imagem.src = "../imagens/pfim.jpg"
    limpar()
}

function limpar() {
    alt1.style.display = "none";
    alt2.style.display = "none";
    alt3.style.display = "none";
    document.getElementById("voltar").style.display = "block";
    document.getElementById("clique").style.display = "none";
}

