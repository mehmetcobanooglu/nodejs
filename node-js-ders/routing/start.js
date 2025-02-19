
const http = require('http');
const url = require('url');
const fs = require('fs');
const { error } = require('console');
const PORT = 8000;


const data = fs.readFileSync('data.json', 'utf-8');
const datas = JSON.parse(data);

const server = http.createServer((req, res) => {

    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview') {
        res.end('This is the overview');
    }
    else if (pathName === '/product') {
        res.end('This is the product');
    }
    else if (pathName === '/api') {
        fs.readFile('data.json', 'utf-8', (error, data) => {
            const al = JSON.parse(data);
            res.writeHead(200, { 'Content-type': 'application/json' });
            console.log(al);
            res.end(data);
        })
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'Hello-world'
        });
        res.end(`<h1 style='text-align:center'>SAYFA BULUNAMADI</h2>`)
    }
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`${PORT} NUMARALİ port çalıştı `)
});