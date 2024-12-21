for(let i = 0; i <= 50; i++) {
    if(i % 2 == 0) {
        console.log(i);
    }
}

for(let i = 0; i < 10; i++) {
    if(i == 5)
        continue;
    console.log(i);
}

for(let i = 0; i < 10; i++) {
    if(i == 5)
        break;
    console.log(i);
}

let impares: number = 0;
let i: number = 1;

while(impares < 10) {
    if(i % 2 != 0) {
        console.log(i);
        impares = impares + 1;
    }
    i++;
}

console.log('Início Do-while')
i = 1;
do {
    console.log(i);
    i ++;
} while (i < 10);
console.log('Fim Do-while')