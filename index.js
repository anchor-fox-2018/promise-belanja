const beli = require('./beli.js');
let obj = {item: 'iphone', harga: '10'};

// beli.beli(4, obj, function(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     else {
//         data;
//     }
// })

// beliPromise

beli.beliPromise(4, obj).then(function(resolved){console.log(resolved)}).catch(function(rejected){console.log(rejected)});