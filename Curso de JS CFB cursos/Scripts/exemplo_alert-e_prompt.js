/*
    Mostra a média de 3 alunos informados pelo usuário,(só 3 pois ainda não sei laço de repetição) e que se o filhão tirar menos que 6 ele tem que se reprovado
    se maior ou igual a 6 ele ta aprovado.

*/

var alunos,n1,n2,n3,media;

alunos=prompt("Informe o número de alunos:"); //consideraremos 3;
n1=prompt("A nota do aluno 1 é:");
n2=prompt("A nota do aluno 2 é:");
n3=prompt("A nota do aluno 3 é:");

//Precisa se converter valores do prompt, sempre!
alunos= Number.parseInt(alunos);
n1= Number.parseFloat(n1); 
n2= Number.parseFloat(n2);
n3= Number.parseFloat(n3);

media= (n1+n2+n3)/alunos;

alert("Esta é a média " + media + " de n alunos, tal que n é =" + alunos);

if (media>=6)
{
document.write("O seu filhão ta aprovado parça!");  
}
else
{
    document.write("Infelizmente teu filho tem que estudar melhor!");
}