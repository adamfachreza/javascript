//digunakan untuk pencarian reguler expresion tetapi hasilnya berupa array

var kata = "saya belajar JS"
console.log(kata.match('saya')); // outputnya array, ['saya',index:0, input: 'saya belajar JS', groups: undifined]
console.log(kata.match(/saya/));