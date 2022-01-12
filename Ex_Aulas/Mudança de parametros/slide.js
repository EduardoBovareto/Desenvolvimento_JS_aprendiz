/* Esse script irá fazer com que ao clicar no bitão ele vai de um em um mudando a imagem */
/* Colocar talvez dois botoes depois um pra voltar e o outro pra ir cada com 2 imagen, usar laço */

var i=5;

function muda(valor){
    (onclick=valor);
    for (var i = 0; i <4;i++) {
        imagem=["../img/capture001.png","../img/pao-caseiro-16.jpg","../img/pao-caseiro-para.jpg","../img/pao-frances.jpg"];
        if (onclick==valor) {
            document.getElementById("imagem"). src= imagem[i];
            document.getElementById("texto").innerHTML("posição"+ i);
            
        }
        
    }
    
    //Laço de repetição
    //Let i de valor 5
    //mostra a imagem atravéz de onclick 
    //um array que varia conforme i= --i;
    
}