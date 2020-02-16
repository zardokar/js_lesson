var  http  = require('http')
     fs    = require('fs')

const PORT = 8000
const DEFAULT_DOC = '/index.htm'

console.log(`Server http://localhost:${PORT} has been running`)

http.createServer(function (req, res) 
{    
    let path = req.url

    if(path === '/') path = DEFAULT_DOC

    fs.readFile( __dirname + path, function (err,data) {
        if (err) {
          res.writeHead(404)
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200)
        res.write(data)
        
        res.end()
      });

}).listen(PORT)