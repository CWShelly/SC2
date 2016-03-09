var requestProxy = require('express-request-proxy'),
    express = require('express'),
    port = process.env.PORT || 8080,
    app = express();

    app.use(express.static('./'));

    app.get('*', function(request, response){
      console.log('new request', request.url);
      response.sendFile('index.html', { root: '.' });
    });

app.listen(port, function(){
  console.log('server started on port ' + port + '!');
});
