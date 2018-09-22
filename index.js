const beli = require('./beli');

beli(100000,{item: "Voucher Game", harga: 50000, waktu: 2000})
    .then(function(kembalian){        
        return beli(kembalian,{item: "Game Stick", harga: 10000, waktu: 1000})
    })
    .then(function(kembalian){        
        return beli(kembalian,{item: "Kaos Gaming", harga: 15000, waktu: 2000})
    })
    .then(function(kembalian){        
        return beli(kembalian,{item: "Cable Replacement", harga: 7000, waktu: 1000})
    })
    .then(function(kembalian){        
        return beli(kembalian,{item: "Hard Case", harga: 15000, waktu: 3000})
    })
    .then(function(kembalian){        
        return beli(kembalian,{item: "Charger Hp", harga: 15000, waktu: 2000})
    })
    .catch(function(){
        console.log("Wahhh...Padahal Itu Yang Penting!!!")
    })