

let products = [
    {
        merk:'apple',
        type:'laptop',
    },
    {
        merk:'samsung',
        type:'hp',
    },
    {
        merk:'LG',
        type:'Monitor',
    },
    {
        merk:'Asus',
        type:'laptop',
    },
];

console.log(
    products.every(product=>product.type ==='Monitor')
); // outputnya false karena type produk bukan cuma monitor tapi ada hp dan laptop jg

