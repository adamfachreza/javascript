function ganjil(){
    var bilanganGanjil= []
    for(var i = 0; i<30; i++){
        if(i%2 !== 0){
            bilanganGanjil.push(i)
        }
    }
    return bilanganGanjil
}

console.log(ganjil())