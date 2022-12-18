function foreach(){
    var data = ['a','b','c'];

    data.forEach(function(item,index,array){
        console.log(item);
        console.log(index);
        console.log(array);
    })
}

foreach()

//outputnya

// a  output item
// 0 output index
// [ 'a', 'b', 'c' ] output array
// b output item
// 1 output index
// [ 'a', 'b', 'c' ] output array
// c output item
// 2 output index
// [ 'a', 'b', 'c' ] output array
