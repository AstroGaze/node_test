const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is the home page!');
    } else if (req.url === '/about') {
        res.end('This the about page!')
    } else {
        res.end(`
        <h1>Oooops!!!</h1>
        <p> There seems to be a problem.</p>
        <a href="/"> Click here to go back home</a>
        `);
    }
    /* console.log(req);
    res.write('Hi and welcome to our website');
    res.end(); */
})

server.listen(5000);