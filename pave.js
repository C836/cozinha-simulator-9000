document.onload = setTimeout(function () {
    alert('"OK" para continuar');
    document.getElementById("alternativas").style.display = "flex";
    document.getElementById("descricao").innerHTML = "Ao chegar no mercado você percebe que esqueceu um dos itens da lista! Qual dos itens a seguir NÃO faz parte da sua receita?"
    document.getElementById("alt1").innerHTML = "A - Creme de leite"
    document.getElementById("alt2").innerHTML = "B - Leite"
    document.getElementById("alt3").innerHTML = "C - Fermento"
    document.getElementById("imagem").src="imagens/c2.png";

    fase1()

}, 3000);

function fase1(){
    setTimeout(function () {
        var escolha = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha.toUpperCase() == "A".toUpperCase() || escolha.toUpperCase() == "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Ao chegar em casa, você percebe que acabou comprando o ingrediente errado! Você decide deixar a ideia para outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/pf3.jpg"
    } else if (escolha.toUpperCase() == "C".toUpperCase()){
        fase2();
    } else {
        fase1()
    }
 }, 3000);
}

function fase2(){
    document.getElementById("fase").innerHTML = "FASE 2";
    document.getElementById("descricao").innerHTML = "Com todos os ingredientes em mãos, você separa o leite condensado, as gemas dos ovos, o amido de milho e o leite. Qual será o primeiro passo?" 
    document.getElementById("alt1").innerHTML = "A - Mexer um pouco e colocar na geladeira até endurecer"
    document.getElementById("alt2").innerHTML = "B - Adicionar o creme de leite e misturar"
    document.getElementById("alt3").innerHTML = "C - Misturar numa panela ao fogo e reservar"
    document.getElementById("imagem").src="imagens/a3.jpg"

    setTimeout(function () {
        var escolha2 = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha2.toUpperCase() == "A".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Você simplesmente esquece sua receita no fundo da geladeira e só vai achar alguns dias depois. Você desiste da ideia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/af2.png"
    } else if (escolha2.toUpperCase() == "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Você vai olhar a receita e percebe que pulou alguns passos. Você decide guardar o resto dos ingredientes e deixa a ideia pra outro dia";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/af3.png"
    } else if (escolha2.toUpperCase() == "C".toUpperCase()){      
        fase3()
    } else{
        fase2()
    }
 }, 3000);
}

function fase3(){
    document.getElementById("fase").innerHTML = "FASE 3";
    document.getElementById("descricao").innerHTML = "Após deixar a massa consistente, qual será o próximo passo?" 
    document.getElementById("alt1").innerHTML = "A - Adicionar o chocolate à massa"
    document.getElementById("alt2").innerHTML = "B - Misturar o resto do leite condensado com um pouco de margarina e o chocolate"
    document.getElementById("alt3").innerHTML = "C - Deixar no fogo por mais alguns minutos"
    document.getElementById("imagem").src="imagens/p4.png"

    setTimeout(function () {
        var escolha3 = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha3.toUpperCase() == "A".toUpperCase() || escolha3.toUpperCase() == "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "O chocolate não faze parte da massa nessa receita!";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/af4.png"}
    if (escolha3.toUpperCase() == "C".toUpperCase() || escolha3.toUpperCase() == "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Você acaba esquecendo sua massa no fogo, que acaba queimando. Você decide deixar a ideia pra outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/af5.jpg"
    } else if (escolha3.toUpperCase() == "B".toUpperCase()){      
        fase4()
    } else{
        fase3()
    }
 }, 3000);
}

function fase4(){
    document.getElementById("fase").innerHTML = "FASE 4";
    document.getElementById("descricao").innerHTML = 'E por fim...'
    document.getElementById("alt1").innerHTML = "A - Levar ao fogo novamente"
    document.getElementById("alt2").innerHTML = "B - Começar a montar!"
    document.getElementById("alt3").innerHTML = "C - Deixar na geladeira por 1 hora"
    document.getElementById("imagem").src="imagens/a4.png"

    setTimeout(function () {
        var escolha4 = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha4.toUpperCase() == "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Por pouco... Tente novamente!";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/a4f.jpg"
    } else if (escolha4.toUpperCase() == "C".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "O creme não ficou na consistência certa. Tente novamente!";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/a4f.jpg"
    } else if (escolha4.toUpperCase() == "A".toUpperCase()){      
        fim()
    } else{
        fase4()
    }
 }, 3000);
}

function fim(){
    document.getElementById("fase").innerHTML = "FIM";
    document.getElementById("descricao").innerHTML = "Você termina de montar com os cremes, os biscoitos e raspas de chocolate para decorar. Após deixar no congelador por algumas horas... Seu pavê de chocolate está pronto!" 
    document.getElementById("alt1").style.display = "none";
    document.getElementById("alt2").style.display = "none";
    document.getElementById("alt3").style.display = "none";
    document.getElementById("voltar").style.display = "block";
    document.getElementById("imagem").src="imagens/afim.jpg"
}