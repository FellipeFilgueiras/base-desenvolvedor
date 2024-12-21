
let notas: number[] = [10, 9.5, 7.8, 9.8, 9];
let total: number = 0;

for(let i: number = 0; i < notas.length; i++) {
    total = total + notas[i];   
}

let media: number = total / notas.length;

console.log(media);

let array: number[] = [];
array.push(10);
array.push(5);
array.push(7);
console.log(array);

array.pop();
console.log(array);