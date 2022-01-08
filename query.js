const http = require('http');
const url = require('url');
//const querystring=require('querystring');
http
  .createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const q = url.parse(req.url, true).query;
    const PI=3.141592653589793238;
    var output=-1;
    var object=q.object;
    var metric=q.metric;
    var radius=q.radius;
    if(object == "sphere" && metric == "volume")
    {
        output= (4/3) * PI * radius * radius * radius;
    }
    else if(object == "sphere" && metric == "surfacearea")
    {
        output= 4 * PI * radius * radius;
    }
    else if(object == "circle" && metric == "area")
    {
        output= PI * radius * radius;
    }
    if(output!=-1)
        res.write(metric+" of "+object+" is "+output);
    res.end();
   
  })
  .listen(8080);
