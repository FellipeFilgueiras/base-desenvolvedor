let idade: number = 17;

if(idade >= 18)
    console.log('Você é maior de idade!');
else if(idade >= 16)
    console.log('Você é menor de idade, mas já pode votar!');
else
    console.log('Você é menor de idade!');

console.log('Terminou!')


let mes: number = 1;

switch(mes) {
    case 1:
        console.log('Janeiro');
        break;
    case 2:
        console.log('Fevereiro');
        break;
    case 3:
        console.log('Março');
        break;
    default:
        console.log('Mês inválido');
        break;
}