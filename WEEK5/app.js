const http = require('http');

// import local modules
const root = require('./module/root_module.js');
const about_module = require('./module/about_module.js');
const contact_module = require('./module/contact_module.js');
const gallery_module = require('./module/gallery_module.js');
const notFound_module = require('./module/not_found_module.js');
const footer = require('./module/footer_module.js');

const PORT = 3000; // Change if needed
const name = "Nimrod Dela Cruz"; // Change to your name

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let content = "";

    if (req.url === '/' || req.url === '/root') {
        content = root(name);
    } else if (req.url === '/about') {
        content = about_module(name);
    } else if (req.url === '/contact') {
        content = contact_module(name);
    } else if (req.url === '/gallery') {
        content = gallery_module(name);
    } else {
        content = notFound_module(name);
    }

    content += footer();
    res.end(content);
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

