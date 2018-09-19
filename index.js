const beli = require('./beli');

class Item {
  constructor(name, price, time) {
    this.item = name;
    this.harga = price;
    this.waktu = time;
  }
}

let permen1 = new Item ('permen1', 1000, 1000);
let permen2 = new Item ('permen2', 2000, 1000);
let permen3 = new Item ('permen3', 3000, 1000);
let permen4 = new Item ('permen4', 4000, 1000);
let permen5 = new Item ('permen5', 5000, 1000);

beli(1000000, permen1)
  .then(result => { return beli(result.kembalian, permen2)})
  .then(result => { return beli(result.kembalian, permen3)})
  .then(result => { return beli(result.kembalian, permen4)})
  .then(result => { return beli(result.kembalian, permen5)})
  .catch(err => {console.log(err)})
