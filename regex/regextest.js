function regextest(){
    var kata = "belajar js bareng niomic"
    console.log(/belajar/.test(kata)); // nyari kata belajar di variabel kata, klo ada outputnya true kalo g ada false
    console.log(/satu/.test(kata));
}

regextest();