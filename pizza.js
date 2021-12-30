document.onload = setTimeout(function () {
    alert('"OK" para continuar');
    document.getElementById("alternativas").style.display = "flex";
    document.getElementById("descricao").innerHTML = "Ao chegar no mercado, você percebe que o estoque de óleo acabou! Por qual outro ingrediente você poderá substituir o óleo?"

    document.getElementById("alt1").innerHTML = "A - Azeite"
    document.getElementById("alt2").innerHTML = "B - Leite"
    document.getElementById("alt3").innerHTML = "C - Ketchup"
    document.getElementById("imagem").src="imagens/p2.jpg";

    fase1()

}, 3000);

function fase1(){
    setTimeout(function () {
        var escolha = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha.toUpperCase() == "C".toUpperCase() || escolha.toUpperCase() == "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Seu ingrediente acaba afetando a consistência da massa. Você decide deixar a ideia pra outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/pf2.jpg"
    } else if (escolha.toUpperCase() == "A".toUpperCase()){
        fase2();
    } else {
        fase1()
    }
 }, 3000);
}

function fase2(){
    document.getElementById("fase").innerHTML = "FASE 2";
    document.getElementById("descricao").innerHTML = "Ao chegar em casa com todos os ingredientes em mãos, você começa a preparar sua massa. Qual será o primeiro passo?" 
    document.getElementById("alt1").innerHTML = "A - Dissolver o fermento, misturando com sal, açucar e a água morna"
    document.getElementById("alt2").innerHTML = "B - Misturar todos os ingredientes numa panela ao fogo"
    document.getElementById("alt3").innerHTML = "C - Misturar o sal, o açucar, e a farinha"
    document.getElementById("imagem").src="imagens/p3.png"

    setTimeout(function () {
        var escolha2 = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha2.toUpperCase() == "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Sua falta de paciencia estragou toda sua massa! Seus ingredientes acabaram então você decide deixar a ideia pra outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/pf3.jpg"
    } else if (escolha2.toUpperCase() == "C".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Você esqueceu do fermento!";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/pf3.jpg"
    } else if (escolha2.toUpperCase() == "A".toUpperCase()){      
        fase3()
    } else{
        fase2()
    }
 }, 3000);
}

function fase3(){
    document.getElementById("fase").innerHTML = "FASE 3";
    document.getElementById("descricao").innerHTML = "O fermento já se dissolveu completamente, qual será o próximo passo?" 
    document.getElementById("alt1").innerHTML = "A - Deixar a massa descansar"
    document.getElementById("alt2").innerHTML = "B - Deixar no forno por 30 minutos"
    document.getElementById("alt3").innerHTML = "C - Adicionar a farinha de trigo, o azeite, e misturar"
    document.getElementById("imagem").src="imagens/p4.png"

    setTimeout(function () {
        var escolha3 = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha3.toUpperCase() == "A".toUpperCase() || escolha3.toUpperCase() == "B".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Você esqueceu do resto dos ingredientes! A textura da massa não ficou muito boa então você decide deixar a ideia pra outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/pf4.jpg"
    } else if (escolha3.toUpperCase() == "C".toUpperCase()){      
        fase4()
    } else{
        fase3()
    }
 }, 3000);
}

function fase4(){
    document.getElementById("fase").innerHTML = "FASE 4";
    document.getElementById("descricao").innerHTML = 'Sua massa já está com uma "cara" boa! Qual será o próximo passo?'
    document.getElementById("alt1").innerHTML = "A - Deixar no forno por 30 minutos"
    document.getElementById("alt2").innerHTML = "B - Deixar a massa crescer por alguns minutos."
    document.getElementById("alt3").innerHTML = "C - Adicionar mais fermento, para cresce a massa ainda mais."
    document.getElementById("imagem").src="imagens/p5.jpg"

    setTimeout(function () {
        var escolha4 = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha4.toUpperCase() == "A".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Você não deixou a massa descansar e acabou ficando muito borrachuda. Você decide deixar a ideia pra outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/pf2.jpg"
    } else if (escolha4.toUpperCase() == "C".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "O excesso de fermento acaba estragando a textura da sua massa e deixando amarga demais. Você decide deixar a ideia pra outro dia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/pf5.jpg"
    } else if (escolha4.toUpperCase() == "B".toUpperCase()){      
        fase5()
    } else{
        fase4()
    }
 }, 3000);
}

function fase5(){
    document.getElementById("fase").innerHTML = "FASE 5";
    document.getElementById("descricao").innerHTML = "Sua massa já está com uma boa consistência, o que fazer em seguida?"
    document.getElementById("alt1").innerHTML = "A - Deixar no freezer por um tempo"
    document.getElementById("alt2").innerHTML = "B - Sovar a massa, abrir e pré-aquecer no forno"
    document.getElementById("alt3").innerHTML = "C - Levar ao forno na temperatura mais alta para aquecer mais rápido."
    document.getElementById("imagem").src="imagens/p6.jpg"

    setTimeout(function () {
        var escolha5 = prompt("Digite sua alternativa (A, B ou C)");

    if (escolha5.toUpperCase() == "A".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Você esquece da existência da pizza e só vai lembrar 2 semana depois. Você desiste completamente da ideia.";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/pf6.png"
    } else if (escolha5.toUpperCase() == "C".toUpperCase()){
        document.getElementById("fase").innerHTML = "FIM DE JOGO";
        document.getElementById("descricao").innerHTML = "Sua massa acabou ficando crua. Cozinhar requer paciência!";
        document.getElementById("alt1").style.display = "none";
        document.getElementById("alt2").style.display = "none";
        document.getElementById("alt3").style.display = "none";
        document.getElementById("voltar").style.display = "block";
        document.getElementById("imagem").src="imagens/pf6.png"
    } else if (escolha5.toUpperCase() == "B".toUpperCase()){      
        fim()
    } else{
        fase5()
    }
 }, 3000);
}

function fim(){
    document.getElementById("fase").innerHTML = "FIM";
    document.getElementById("descricao").innerHTML = "Após isso, você termina de rechear e coloca no forno por alguns minutos. Sua deliciosa pizza está pronta!" 
    document.getElementById("alt1").style.display = "none";
    document.getElementById("alt2").style.display = "none";
    document.getElementById("alt3").style.display = "none";
    document.getElementById("voltar").style.display = "block";
    document.getElementById("imagem").src="imagens/pfim.jpg"
}