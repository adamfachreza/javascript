//digunakan untuk mengembalikan string yang cocok, kalo g ada maka mengembalikan null

function regexexec(){
    var kata = "belajar js bersama niomic";
    var str = new RegExp("niomic");

    console.log(str.exec(kata));
    // [
    //     'niomic',
    //     index: 19,
    //     input: 'belajar js bersama niomic',
    //     groups: undefined
    //   ]
}

regexexec();