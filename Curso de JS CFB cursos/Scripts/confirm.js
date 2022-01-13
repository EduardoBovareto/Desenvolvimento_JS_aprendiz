/*
    if(confirm==true)
{
    da pra fazer isso pois os valores que estão no confirm
    já são pré-definidos como "OK=true" e "cancelar=false", são constantes;
}
*/
alert("É um prazer em conhece-lo colega"+"\n"+"\n"+"seja bem vindo ao me dorme");
//alert inicializa a conversa 

var nome=prompt("Informa seu nome para mim:","digite aqui...");
//prompt acima pergunta o nome

if(nome===null || nome=="" || nome=="digite aqui..."){ //analise de casos do nome 
/*
    3 casos (1 caso: Quando o cara aperta o cancelar ="null"; 2 caso: quando o cara  apaga o text-box e não coloca nada; 3 caso: Quando o cara aperta só OK e entrega o "digite aqui..."; )
*/
nome=prompt("FAVOR, NÃO ESQUEÇA DE POR O NOME!");
}

var valor=confirm("Deseja se evadir "+ nome + " ?"); //confirmo se o cara quer sair
document.write(valor + " , pode se evadir colega!"+"<br>"+"<br>"); //falta verificar se sim ou se não
document.write("Obrigado por vir " + nome);
/* 
    Eu mando a mensagem pra ele e ele pode apertar no botão pra sair e ir embora, pergunto quem ele é e pergunto se ele quer se evadir, se ele queiser pode clicar no botão;
 */
function fecha(valor){ //valor recebe um 'click pois no html "this significa 'isso', e recebe o "isso do botão que no caso é o click" " logoo'
onclick=valor;
    if (onclick==valor){
    window.close();
    }
}