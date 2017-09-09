http = require('http')
fileSystem = require('fs')
path = require('path')

http.createServer(function(request, response) {
  filePath = path.join(__dirname, 'SparkleSample/SampleAppCast.xml')
    response.writeHead(200, {
        'Content-Type': 'text/xml',
    })
    var readStream = fileSystem.createReadStream(filePath)
    readStream.pipe(response)
    console.log(Date.now())
}).listen(8080)

console.log("Started SparkleSample Server at :8080")
