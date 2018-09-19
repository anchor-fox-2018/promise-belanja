const beli = require('./beli.js');

let wortel = {item: 'wortel', harga: '5000'}
let buncis = {item: 'buncis', harga: '10000'}
let kentang = {item: 'kentang', harga: '12000'}
let lemon = {item: 'lemon', harga: '20000'}
let bawang = {item: 'bawang', harga: '5000'}

beli(50000, wortel)
    .then(function(hasil){
        console.log(hasil.msg)
        return beli(hasil.kembalian, buncis)
    })
    .then(function(hasil){
        console.log(hasil.msg)
        return beli(hasil.kembalian, kentang)
    })
    .then(function(hasil){
        console.log(hasil.msg)
        return beli(hasil.kembalian, lemon)
    })
    .then(function(hasil){
        console.log(hasil.msg)
        return beli(hasil.kembalian, bawang)
    })
    .catch(function(err){
        console.log(err)
    })
