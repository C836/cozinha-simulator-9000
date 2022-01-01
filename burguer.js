document.onload = setTimeout(function () {
function receber(){
    var entrada = prompt('Digite a letra equivalente aos itens do seu hamburguer. \r\n(ex: "a b f g k")')

        if (entrada.includes("a") || entrada.includes("A")){
        var hamburguer = true
        }
        if (entrada.includes("b") || entrada.includes("B")){
        var queijo = true
        }
        if (entrada.includes("c") || entrada.includes("C")){
        var presunto = true
        }
        if (entrada.includes("d") || entrada.includes("D")){
        var ovo = true
        }
        if (entrada.includes("e") || entrada.includes("E")){
        var bacon = true
        }
        if (entrada.includes("f") || entrada.includes("F")){
        var alface = true
        }
        if (entrada.includes("g") || entrada.includes("G")){
        var tomate = true
        }
        if (entrada.includes("h") || entrada.includes("H")){
        var cebola = true
        }
        if (entrada.includes("i") || entrada.includes("I")){
        var picles = true
        }
        if (entrada.includes("j") || entrada.includes("J")){
        var maionese = true
        }
        if (entrada.includes("k") || entrada.includes("K")){
        var ketchup = true
        }
        if (entrada.includes("l") || entrada.includes("L")){
        var cheddar = true
        }
    
        if (hamburguer && queijo && presunto && ovo && bacon && alface && tomate){
            burg="X-Tudo"
            }else if (hamburguer && queijo && ovo && bacon){
                burg="X-Egg bacon"
                } else if (hamburguer && queijo && ovo && !(bacon)){
                    burg="X-Egg"
                    } else if (hamburguer && ovo && alface && tomate && cebola && !(bacon)){
                        burg="X-Salada"
                        } else if (hamburguer && queijo && bacon && !(ovo)){
                            burg="X-Bacon"
                            } else if (hamburguer && cheddar && !(presunto && ovo && maionese && ketchup)){
                                burg="X-Cheddar"
                                } else if (hamburguer && alface && tomate && !(bacon && picles)){
                                    burg="Tradicional"
                                    } else if (hamburguer && queijo){
                                        burg="X-Burguer"
                                        } else if (hamburguer && alface && tomate && !(ovo && bacon)){
                                            burg="Hamburguer"}
            else if (queijo && presunto && ovo && !(hamburguer && bacon)){
                burg="Americano"
                } else if (queijo && !(hamburguer && presunto && ovo && bacon && picles)){
                    burg="Sanduíche de queijo"
                    } else if (ovo && !(hamburguer && presunto)){
                        burg="Sanduíche de ovo"
                        } else if (presunto && !(hamburguer && queijo && ovo && picles && cheddar)){
                            burg="Sanduíche de presunto"
                            } else if (!hamburguer){
                                burg="Sanduíche"
                                }
            else {
                alert("Adicione ou remova algumas camadas!")
                receber()
            }} receber (); 

        document.getElementById("fase").innerHTML = burg;
        document.getElementById("descricao").style.display = "none"
        document.getElementById("lista").style.display = "none"
        document.getElementById("burgCamadas").style.display = "block"
        
        
        
        }, 5000);
/*
A - hamburguer
B - queijo
C - presunto
D - ovo
E - bacon 
F - alface
G - tomate
H - cebola
I - picles
J - maionese
K - ketchup
L - cheddar
*/