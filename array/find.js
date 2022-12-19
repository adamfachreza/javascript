var angka = [1,5,9,14,30,50,80,100];

var found = angka.find(function(find){
    return find>5
});
console.log(found) // outputnya 9, dia bakal nyari angka setelahnya yang lebih besar dari 5 

var findindex = angka.findIndex(function(fi){
    return fi>8;
});

console.log(findindex); // sama kaya find cuma yang di munculin indeksnya
