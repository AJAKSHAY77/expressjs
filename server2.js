const http = require("http")
const Option = {
    hostname:`fakestoreapi.com`,
    path:`/products/1`,
    mathod :`GET`
}

const req = http.request(Option,(apires)=>{
   apires.on("data",(data)=>{
    console.log(data.toString());
   })
})
req.on("error",()=>{
    console.log(e);
})

req.end()

// const http = require("http")

// Option = {
//     hostname:`fsksksk`,
//     path:``,
//     method:`GET`
// }
 
// const req = http.request(Option,(apires)=>{
//     apires.on("data",(data)=>{
//          console.log(data.toString());
//     })
    
// })

// req.on("error",()=>{
//     console.log(e);
// })
// req.end()




















