//Conferindo o nome da imagem exibida
function checkSrc(id){
var src = document.getElementById(id).src;
 return src.substring(src.length -9, src.length);
}

//Pegando o src da imagem e atribuindo X e 0 para o jogador;
var jogador = "x";
//contator
var jogada = 0
function checkJogo(id){
    var src = checkSrc(id);
    if(src == "fundo.png"){
        document.getElementById(id).src = "imagens/" + jogador + ".png";
        jogada++;
        if(chkVitoria()){
            alert("Fim do Jogo! Vitoria do: " + jogador);
            location.reload();
        }
        if(jogada >= 9){
            alert("EMPATE");
            location.reload();
        }

        if(jogador ==  'x'){
            jogador = '0';
        }else{
            jogador = 'x';
        }
    }
}

//Condiçoes de Vitoria
function chkVitoria(){
    if((checkSrc('cel1') === checkSrc('cel2')) && (checkSrc('cel1') == checkSrc('cel3')) && checkSrc('cel1') != 'fundo.png'){
        return true;
    }
    if((checkSrc('cel4') === checkSrc('cel5')) && (checkSrc('cel4') == checkSrc('cel6')) && checkSrc('cel4') != 'fundo.png'){
        return true;
    }
    if((checkSrc('cel7') === checkSrc('cel8')) && (checkSrc('cel7') == checkSrc('cel9')) && checkSrc('cel7') != 'fundo.png'){
        return true;
    }
    if((checkSrc('cel1') === checkSrc('cel4')) && (checkSrc('cel1') == checkSrc('cel7')) && checkSrc('cel1') != 'fundo.png'){
        return true;
    }
    if((checkSrc('cel2') === checkSrc('cel5')) && (checkSrc('cel2') == checkSrc('cel8')) && checkSrc('cel2') != 'fundo.png'){
        return true;
    }
    if((checkSrc('cel3') === checkSrc('cel6')) && (checkSrc('cel3') == checkSrc('cel9')) && checkSrc('cel3') != 'fundo.png'){
        return true;
    }
    if((checkSrc('cel1') === checkSrc('cel5')) && (checkSrc('cel1') == checkSrc('cel9')) && checkSrc('cel1') != 'fundo.png'){
        return true;
    }
    if((checkSrc('cel3') === checkSrc('cel5')) && (checkSrc('cel3') == checkSrc('cel7')) && checkSrc('cel3') != 'fundo.png'){
        return true;
    }
    return false;
    
}
