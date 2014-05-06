// imports
var http = require('http'), fs = require('fs'), 
    express = require('express'), AWS = require('aws-sdk');

// configure AWS
AWS.config.loadFromPath('./aws.json');
var s3 = new AWS.S3();

// startup the HTTP server
app = express();
var httpServer = http.createServer(app);
httpServer.listen(8080);

// routes
app.get('/api/todo/:id/files/:name', function(req, res) {
    s3.getObject({
        Bucket: 'glsec-2014',
        Key: 'todos/' + req.params.id + '/' + req.params.name + '.txt'
    }, function(err, data) {
        if (err || !data) { return res.send(500, err); }

        var buff = new Buffer(data.Body, "binary");
        res.send(buff);
    });
});

// PHASE 2 code starts here
var socketIo = require('socket.io');

io = socketIo.listen(httpServer);

io.sockets.on('connection', function(socket) {
    socket.emit('stats', {
        hits: 1,
        clients: 10,
        cost: 100.0
    });
});