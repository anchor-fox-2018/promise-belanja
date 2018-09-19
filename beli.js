function beli(uang, obj){
  return new Promise(function(resolve, reject){
    console.log(`Saya pergi membeli ${obj.item}`)
    let kembalian = uang - obj.harga
    if(kembalian > 0){
      let msg = `Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`
      let object = {msg, kembalian}
      resolve(object)
    } else {
      let error = `uang gk cukup nih buat beli ${obj.item} uangnya kurang ${kembalian * -1}`
      reject(error)
    }
  })
}

module.exports = beli;
