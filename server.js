const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(__dirname + '/dist/angularattack2018-nullpointer'));


const forceSSL = function() {
    return function (req, res, next) {
      if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
         ['https://', req.get('Host'), req.url].join('')
        );
      }
      next();
    }
  }

app.use(forceSSL());






app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angularattack2018-nullpointer/index.html'));
});

let PORT = process.env.PORT || 8080;

let listener = app.listen(PORT , () => {
    console.log('server is running at ' + PORT);
});