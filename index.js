let Student = {
  name: 'Eduardo Bovareto',
  itensThatWant: 'FONE DE OUVIDO',
  IDADE: 40,
  language: 'JS',
};
// console.log(Student.language)
// console.log(Student.IDADE, typeof(Student.IDADE))
// console.log(`\n\n\n O senhor chamado: ${Student.name},  está learning ${Student.language}, ele tem ${Student.IDADE} anos`);
Estudante = [
  Student.name,
  Student.IDADE,
  Student.language,
  Student.itensThatWant
];
// console.log(Estudante)
// console.log(Estudante[0])
let Student2 = {
  name: 'Fofinha01',
  idade: 25,
  GostaDe: 'Comer Comer',
  joga: 'Counter Srike: Globall Ofensive',
  };
let EstudanteNovo = [
  'Décimo 1 da turma',
  Student2,
];

Estudante[4] = EstudanteNovo;
console.log(EstudanteNovo[1], Estudante[4]);