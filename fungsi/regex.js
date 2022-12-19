//regex atau reguler expression yg sering digunakan untuk mencari atau mengganti pada data string  
function regex(){
    var a = 'abcdef';

    return a.search(/a/);
}

console.log(regex()); // output 0, karena a di indeks 0
