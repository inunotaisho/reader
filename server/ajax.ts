import * as express from 'express';
import * as http from 'http';
import * as fs from 'fs';

export function ajax(){
    let app = express();

        app.use(express.bodyParser());
        app.get('/', function(req, res){
            console.log('GET /');
            var html = fs.readFileSync('index.html');
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        });
        app.post('/', function(req, res){
            console.log('POST /');
            console.dir(req.body);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('thanks');
        });
}