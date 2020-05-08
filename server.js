// Create and export an express application with it's middleware and end points
// create server and listen

const express = require('express');
const server = express();
const hubsRouter = require('./hubs/hubs-router.js');

server.use(express.json());
server.use('/api/hubs', hubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});

module.export = server;