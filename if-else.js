function jalanSatu()
{
    var nilai = 1;
    if(nilai === 3){
        console.log("tiga");
    }else if(nilai == 2){
        console.log("dua")
    }else{
        console.log('tidak dua - duanya')
    }
}

jalanSatu()

// atau bisa juga menulis elseif dengan cara

function jalanDua(){
var nilai = 2;

if(nilai===1)console.log('ok')
else console.log('bukan')

}

jalanDua()

function ifbaru(){
    var nilai = 7;

    if(nilai>=8)console.log('lulus')
    else if(nilai>6)console.log('lumayan')
    else console.log('ga lulus')
}
ifbaru()