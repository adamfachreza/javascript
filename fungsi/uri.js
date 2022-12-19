//encodeUrRI menyandikan karakter khusus kecuali ,/?:@=+$#
//decodeURI kebalikan dari encodeURI

var uri = "my test.aso?name=stale&car=saab"
var res = encodeURI(uri);

console.log(res); // outputnya my%20test.aso?name=stale&car=saab (spasi di ubah jadi %)

var a = "my%20test.aso?name=stale&car=saab"
var res2 = decodeURI(a);

console.log(res2); // my test.aso?name=stale&car=saab