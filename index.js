const server = require('./api/server');

const port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log(`\nListening on port ${port}...\n`);
});