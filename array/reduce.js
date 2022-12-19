var angka = [1,2,3,4];

var reduce = (accumulator, currentValue) => accumulator + currentValue;

console.log(angka.reduce(reduce)); // akumulasi variabel angka
console.log(angka.reduce(reduce,5)); // outputnya 15 karena akumulasi variabel angka + 5

var angka2 = [[0,1],[2,3],[4,5]].reduceRight(
    (accumulator,currentValue)=>accumulator.concat(currentValue)
);

console.log(angka2);