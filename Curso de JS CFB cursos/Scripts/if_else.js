// % == mod
// teste lógico com if ou if else é um teste por referencia e um teste direto é com número já

var value,maior,n1,n2;

value=prompt("Informe um número");
value= Number.parseInt(value);

if((value % 2)==0) //se colocar 0 na seleção de variaveis sempre é false e se for 1 é sempre true
{
document.write("é um número par! "+ value);
}
else
{
    
document.write("é um número impar! "+ value);
  
}

/*
    Para ver se o número é primo, devemos ver se ele é só divisível por 1 e por ele mesmo, não sendo divisível pelos outrs 8 algarismo, para isso, fazer na mão é foda, logo devemos usar o laço for pois é mais facil.
*/


n1=prompt("Informe um valor: ");
n1= Number.parseInt(n1);
maior=0;

if(n1==maior)
{
    document.write("<br>"+"<br>"+"O valor é igual a 0 "+"<br>"+"<br>");
}

if(n1>maior)
{   
    document.write("<br"+"<br>"+" O valor maior inicial é " + maior +" sendo ele mudado por um digitado:  " + n1);
    document.write("<br>"+"<br>"+" O valor é maior que o anterior ");
    maior=n1;
}

n2=prompt("Informe um segundo valor: ");
n2 = Number.parseInt(n2);

if(n2>maior)
{   
    document.write("<br>"+"<br>"+" O valor "+ n2 +" é maior que "+ maior);
    maior=n2;    
}

//poderia colocar para reaproveitar o valor impar ou par;
/*

var string;
string="valor";
var tamanho=string.length;

document.write("Este é o tamanho" + tamanho);

*/