
const fs = require('fs')


const http = require('http')


const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end('welcome to our homepage')
    }
   if(req.url === '/about') {
    res.end('Here is our shirt history')
   }
   res.end(`
   <h1>Ooops!</h1>
   <p>We cna't seem to find the pageyou are looking for</p>
   <a href="/">back home</a>
   `)
   

})

server.listen(5000)