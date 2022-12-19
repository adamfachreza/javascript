// akan menghasilkan output true pada data yang terbatas

var a = isFinite([1,2,3,4,5]);
var b = isFinite(["jakarta","bogor","depok"]);
var c = isFinite([1,2,3,"A","B"]);
var d = isFinite(-99924.23);

console.log(a);
console.log(b);
console.log(c);
console.log(d);