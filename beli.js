function beli(uang, obj, cb){
  console.log(`Saya pergi membeli ${obj.item}`)
  setTimeout(function(){
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
      cb(kembalian)
    }else{
      console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
      cb(0)
    }
  }, obj.waktu);
}

function beliPromise(uang, obj) {
  console.log(`Saya pergi membeli ${obj.item}`)

  return new Promise(function (resolve, reject) {
    let kembalian = uang - obj.harga
    if (kembalian > 0) {
      let resolved = `Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`;
      // cb(kembalian)
      resolve(resolved);

    } else {
      let rejected = `uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`;
      // cb(0)
      reject(rejected);
    };
  });
}

module.exports = {
  beli,
  beliPromise
}