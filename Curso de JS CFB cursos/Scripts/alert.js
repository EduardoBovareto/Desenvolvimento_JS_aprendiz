/*
    Existem 2 formas de se usar o alert
    com window.alert(); ou alert();
    Ou seja, O alert é um metodo para windows (janelas)
    Metodos para documentos (documents) são obrigatórios de serem referenciados na declaração do comando (metodo),
    ja para as windows não se precisa declarar,usar, referenciar o objeto para usar o metodo.

        Estamos dentro da window, estamos sempre dentro dela, pois ela é o objeto mais básico,
        simples e inicial em uma página, por isso não precisamos referencia-lo.

        Ja no documento, estamos nos referenciando algo que esta dentro da window, como por exemplo:
        O documento HTML.
*/
// var hoje= new Date; hojen recebe uma nova data, no caso a atual em que estamos, esta comentado pois é algo para mais pra frente, tem a var hoje no alert tbm

var nome=prompt("Qual seu nome? "); //recebe o nome do cara na window
alert("OLá Amigo, prazer " + nome /* + hoje*/ ); //escreve na aba que aparece a string mais o que tem na variavel
alert("Eu tenho " + 19 + " anos" );

