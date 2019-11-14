const server = require('./api/server');

const port = process.env.PORT || 4000;

server.get('/', (req, res) => {
    res.status(200).send("It's alive");
});

server.listen(port, () => {
    console.log(`\nListening on port ${port}...\n`);
});