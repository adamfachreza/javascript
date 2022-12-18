//sama seperti indeksof bedanya search pencariannya berdasarkan reguler expression

var kata = "saya belajar JS"
console.log(kata.search('saya'));
console.log(kata.search(/saya/)); // reguler exoression

//outputnya sama console pertama di konvert kaya konsole ke 2