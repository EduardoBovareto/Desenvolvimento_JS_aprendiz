// % == mod
// teste lógico com if ou if else é um teste por referencia e um teste direto é com número já

var value;

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