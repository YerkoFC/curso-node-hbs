const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');

    let output = {
        name: "Yerko",
        lastname: "Foncea",
        age: 23,
        url: req.url
    }

    // res.write(JSON.stringify(output));

    res.end('Hello world');
});

server.listen(4000, ()=>{
    console.log(`Server running on port 4000`);
});