// akan mereturn nilai boolean pada tiap filternya

let orang = [
    {
        nama:'budi',
        jk:'pria'
    },
    {
        name:'ibu budi',
        jk:'wanita'
    },
    {
        name:'bapak budi',
        jk:'pria'
    },
];

let wanita = orang.filter(orang=>{
    return orang.jk === 'wanita';
});
let pria = orang.filter(orang=>{
    return orang.jk === 'pria';
});

console.log(wanita); // outputnya [ { name: 'ibu budi', jk: 'wanita' } ]
console.log(pria); //[ { nama: 'budi', jk: 'pria' }, { name: 'bapak budi', jk: 'pria' } ]