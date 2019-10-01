const express = require('express');
const server = express();

//endpoints
server.get('/', (req,res) => {
    res.send("Hello")
})

const port = 8888;
server.listen(port, () => console.log(`\n** API on port ${port}**\n`));