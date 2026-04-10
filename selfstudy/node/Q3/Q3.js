const http = require('http');

let products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Phone'}
];

const server = http.createServer((req, res) => {
    const urlParts = req.url.split('/'); 
    const path = '/' + urlParts[1];
    const id = parseInt(urlParts[2]); 
    const method = req.method;


    const sendJSON = (data, status = 200) => {
        res.writeHead(status, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));
    };


    if (path === '/products' && method === 'GET') {
        sendJSON(products);
    }


    else if (path === '/products' && method === 'POST') {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const newProduct = JSON.parse(body);
            products.push(newProduct);
            sendJSON({ message: "Inserted", data: newProduct }, 201);
        });
    }


    else if (path === '/products' && method === 'PUT' && id) {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            const updatedData = JSON.parse(body);
            const index = products.findIndex(p => p.pid === id);
            
            if (index !== -1) {
                products[index] = { ...products[index], ...updatedData };
                sendJSON({ message: "Updated", data: products[index] });
            } else {
                sendJSON({ message: "Product not found" }, 404);
            }
        });
    }

   
    else if (path === '/products' && method === 'DELETE' && id) {
        const originalLength = products.length;
        products = products.filter(p => p.pid !== id);

        if (products.length < originalLength) {
            sendJSON({ message: "Deleted", pid: id });
        } else {
            sendJSON({ message: "Product not found" }, 404);
        }
    }

    else {
        res.writeHead(404);
        res.end('Invalid Path or Method');
    }
});

server.listen(4000, () => console.log('Server running at http://localhost:4000'));
