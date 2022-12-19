// Buatlah filter,sorting dan reverse deret bilangan 2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16 dengan ketentuan filter angka lebih besar dari 10

var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

var asc = angka.sort();
console.log(asc)

var dsc = asc.reverse();
console.log(dsc);

var filter = angka.filter(af=>{
    return af > 10;
});

console.log(filter);
