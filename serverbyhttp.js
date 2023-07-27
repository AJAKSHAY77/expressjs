const http = require("http")
const port = 3033;
const hostname = "127.0.0.1"

const server = http.createServer((req,res)=>{
  //home page
  //about page
  //contact page
  //product page
  //rest ..error
 if(req.url ==`/`){
    res.statusCode = 200;
    res.setHeader(`content-type`,`text/plain`)
   res.end(`welcome to  nodejs server by `)
 }
  else if(req.url == `/about`){
    res.statusCode = 200;
    res.setHeader(`content-type`,`text/plain`)
   res.end(`about page !`)
 }
 else if(req.url ==`/contact`){
    res.statusCode = 200;
    res.setHeader(`content-type`,`text/plain`)
   res.end(`contact page !`)
 }

 else if(req.url == `/product`){
    const Option = {
        hostname:`fakestoreapi.com`,
        path:`/products/1`,
        mathod :`GET`
    }
    
    const req = http.request(Option,(apires)=>{
       apires.on("data",(data)=>{
        
    res.statusCode = 200;
    res.setHeader(`content-type`,`application/json`)
     res.end(data.toString())
       })
    })
    req.on("error",()=>{
        console.log(e);
    })
    
    req.end()

   

 }else{
    res.statusCode = 500;
    res.setHeader(`content-type`,`text/plain`)
   res.end(`Error!`)

 }

})

server.listen(port,()=>{
    console.log(`the server is running in ${hostname}:${port}`);
})