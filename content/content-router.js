const router = require('express').Router();
const Content = require('./content-model');

router.get('/', async (req, res) => {
    try {
        const content = await Content.find();
        res.status(200).json(content);
    } catch (error) {
        console.log(`\nERROR: GET to /\n${error}\n`);
        res.status(500).json({ message: "Internal server error." })
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const content = await Content.findBy({ id });
        res.status(200).json(content);
    } catch (error) {
        console.log(`\nERROR: GET to /:id\n${error}\n`);
        res.status(500).json({ message: "Internal server error." })
    }
})

router.post('/', async (req, res) => {
    const content = req.body;
    try {
        const newContent = await Content.add(content);
        res.status(201).json(newContent);
    } catch (error) {
        console.log(`\nERROR: POST to /:id\n${error}\n`);
        res.status(500).json({ message: "Internal server error." })
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    try {
        const newContent = await Content.update(changes, id);
        res.status(201).json(newContent);
    } catch (error) {
        console.log(`\nERROR: PUT to /:id\n${error}\n`);
        res.status(500).json({ message: "Internal server error." })
    }
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const removed = await Content.remove(id);
        res.status(200).json(removed);
    } catch (error) {
        console.log(`\nERROR: DELETE to /:id\n${error}\n`);
        res.status(500).json({ message: "Internal server error." })
    }
})

module.exports = router;