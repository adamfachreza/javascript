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
console.log(products.some(product=>product.type === 'laptop')) // mirip kaya every, bedanya kalo ada kriteria yang betul hasilnya true