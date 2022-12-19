// fungsi ini digunakan untuk mengevaluasi pernyataan pada javascript, dapat juga digunakan untuk mengeksekusi pernyataan

var x = [1,2,3,4,5];
var total = 0;

for(i=0;i<x.length;i++){
    total += x[i];
}
console.log(eval(total));

