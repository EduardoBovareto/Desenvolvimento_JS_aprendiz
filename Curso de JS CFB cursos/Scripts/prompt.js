/*
    ASSIM: window.prompt("");
        OU
    ASSIM: prompt("");
dentro do objeto como alert,prompt e confirm não há interpretação da página sobre elementos HTML.
Usa-se "\n";


Podemos passar de 2 formas os argumentos, das quais são:

prompt(""); muda só o texto da caixa, o conteúdo de pergunta a informação que inicializa o prompt de escrita;

prompt("","") o primeiro é o valor que está no conteúdo da caixa e a informação incial da caixa

já as segundas aspas mudam o valor da text-box, caixa de texto, inicializa o propmpt com algum valor já;

*/

var year=2000+22 ,
nome=prompt(year + " Chegamos no ano eleitoral!","Seu nome é:");
alert("Prazerzão "+ nome);

