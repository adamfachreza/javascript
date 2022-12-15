function nested()
{
    var x = 35;
    var y = 30;
    var z = 40;

    if(x>y){
        if(x>z)console.log('x paling besar')
        else console.log('x terbesar kedua')
    }else{
        if(x<z)console.log('x paling kecil')
        else console.log('x urutar keddua')
    }
}

nested()