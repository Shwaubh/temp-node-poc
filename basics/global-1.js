console.log(__dirname)
console.log(__filename)
console.log(process)
var i = 0
setInterval(()=>{
  ++i
  console.log(`Hello World ${i}`)
}, 1000)
