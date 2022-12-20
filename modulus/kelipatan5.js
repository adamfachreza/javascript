function kelipatan5(){
    var mod = []
    for(var i = 0; i<=50; i++){
        if(i%5 === 0)
        mod.push(i);
    }
    return mod;
}

console.log(kelipatan5());