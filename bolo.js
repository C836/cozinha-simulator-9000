
document.onload = setTimeout(function () {
    alert('"OK" para continuar');
    document.getElementById("alternativas").style.display = "flex";
    document.getElementById("descricao").innerHTML = "Você vai correndo para o mercado para fazer as compras e percebe que você esqueceu de um ingrediente! Qual dos itens a seguir está faltando?"

    document.getElementById("alt1").innerHTML = "A - Água"
    document.getElementById("alt2").innerHTML = "B - Leite condensado"
    document.getElementById("alt3").innerHTML = "C - Fermento"
    document.getElementById("imagem").src="imagens/c2.png";

    fase1()

}, 3000);

function fase1(){
    setTimeout(function () {
        var escolha = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha.toUpperCase() != "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Você chega em casa e percebe que está faltando um dos itens da lista. Já que você não tem tanta experiência na cozinha, decide deixar a ideia pra outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/cf2.jpg"
    } else if (escolha.toUpperCase() == "B".toUpperCase()){
        fase2();
    } else {
        fase1()
    }
 }, 3000);
}

function fase2(){
    document.getElementById("fase").innerHTML = "FASE 2";
    document.getElementById("descricao").innerHTML = "Ao chegar em casa, com todos os ingredientes em mãos, você está pronto para por a mão na massa e começar a preparar seus brigadeiros. Qual será o próximo passo?" 
    document.getElementById("alt1").innerHTML = "A - Colocar numa panela ao fogo e deixar esquentar"
    document.getElementById("alt2").innerHTML = "B - Adicionar fermento e misturar"
    document.getElementById("alt3").innerHTML = "C - Cozinhar os ingredientes e misturar no fogo"
    document.getElementById("imagem").src="imagens/c3.png"

    setTimeout(function () {
        var escolha2 = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha2.toUpperCase() == "A".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Você esqueceu de mexer e acabou queimando toda sua massa! Você decide deixar a ideia para outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/cf3.jpg"
    } else if (escolha2.toUpperCase() == "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "O fermento acaba estragando a textura dos brigadeiros e você decide deixar a ideia pra outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/cf3.jpg"
    } else if (escolha2.toUpperCase() == "C".toUpperCase()){      
        fase3()
    } else{
        fase2()
    }
 }, 3000);
}

function fase3(){
    document.getElementById("fase").innerHTML = "FASE 3";
    document.getElementById("descricao").innerHTML = "Após um certo tempo você percebe que a massa já está solta do fundo como indica a receita. Qual será o próximo passo?" 
    document.getElementById("alt1").innerHTML = "A - Deixar descansar no freezer"
    document.getElementById("alt2").innerHTML = "B - Colocar num prato com margarina e deixar esfriar"
    document.getElementById("alt3").innerHTML = "C - Começar a enrolar os docinhos"
    document.getElementById("imagem").src="imagens/c4.jpg"

    setTimeout(function () {
        var escolha3 = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha3.toUpperCase() == "A".toUpperCase()){
        document.getElementById("fase").innerHTML = "FINAL SECRETO";
        document.getElementById("descricao").innerHTML = "Você deixa sua massa no freezer por um tempo e ao abrir a geladeira está tudo congelado! Você aproveita e coloca uns palitos para poder segurar. Seus picolés estão prontos!";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/cfalt.jpg"
    } else if (escolha3.toUpperCase() == "C".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Sua massa está fervendo! Infelizmente você acaba queimando sua mão e derrubando tudo no chão com o susto. Mais cuidado da próxima vez!";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/cf4.jpg"
    } else if (escolha3.toUpperCase() == "B".toUpperCase()){      
        fim()
    } else{
        fase3()
    }
 }, 3000);
}

function fim(){
    document.getElementById("fase").innerHTML = "FIM";
    document.getElementById("descricao").innerHTML = "Depois de deixar a massa esfriar você começa a enrolar seus doces em bolinhas. Após isso, passa tudo no chocolate granulado e está pronto, parabéns! Aproveite seus brigadeiros" 
    document.getElementById("alt1").style.display = "none";
    document.getElementById("alt2").style.display = "none";
    document.getElementById("alt3").style.display = "none";
    document.getElementById("voltar").style.display = "block";
    document.getElementById("imagem").src="imagens/cfim.png"
}