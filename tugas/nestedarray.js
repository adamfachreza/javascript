// Studi Kasus : Nested Array dan Looping

// Hallo Teman-Teman, Sekarang kita akan membuat sebuah function “panggilNestedArray” yang menerima satu parameter (value) berupa data array

// function nested(value){
//     for(i = 0; i<value.length; i++){
//         console.log('id :', value[i][0])
//         console.log('name :', value[i][1])
//         console.log('product :', value[i][2])
//         console.log('\n')
//     }
// }

// var nestedarray = [
//     [1, "Mark Zuckerberg", "Facebook"],
//     [2, "Elon Musk", "Tesla"],
//     [3, "Bill Gates", "Microsoft"],
//      [4, "Steve Jobs", "Apple"]
// ]
// nested(nestedarray)

// TUGAS : Nested Array dan Looping

// Hallo Teman-Teman, Sekarang kamu memiliki tantangan untuk membuat sebuah function “panggilNestedArray” yang menerima satu parameter (value) berupa data Nested Array

// Sekarang kita akan menuliskan code dasarnya

// function panggilNestedArray(value){
//     // tulis jawabanmu disini
//    }
   
//    var nestedArray = [
//       [1,2,3,4],
//       ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
//       ['Facebook', 'Tesla', 'Microsoft', 'Apple']
//    ]
   
//    panggilNestedArray(nestedArray)
   
   
//    Lengkapilah code diatas, sehingga ketika dijalankan akan menghasilkan seperti dibawah ini :
   
//    [ [ 1, 'Mark Zuckerberg', 'Facebook' ],
//     [ 2, 'Elon Musk', 'Tesla' ],
//     [ 3, 'Bill Gates', 'Microsoft' ],
//     [ 4, 'Steve Jobs', 'Apple' ] ]

function panggilNestedArray(value){
    var hasil = []

    for(var i = 0; i <value[0].length; i++){
        var subarray = [value[0][i],value[1][i],value[2][i]];
        hasil.push(subarray);
    }
    console.log(hasil)
}

var nestedArray = [
    [1,2,3,4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)