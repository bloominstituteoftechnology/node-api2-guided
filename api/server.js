// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
const express = require('express');

const server = express();

server.use(express.json());

const Dog = require('./dogs/dogs-model');

const adoptersRouter = require('./adopters/adopters-router');
server.use('/api/adopters', adoptersRouter);

// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS
server.get('/api/dogs', (req, res) => {
  
  console.log(req.query);


  Dog.find()
    .then(dogs => {
      res.status(200).json(dogs);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: 'Error retrieving the dogs' });
    });
});

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Shelter API</h>
    <p>Welcome to the Shelter API</p>
  `);
});

module.exports = server;





// const router = express.Router();

// router.get('/my/new/endpoint', (req, res) => {
//   res.json({ data: 42, description: 'life the universe and everything' });
// });

// router.get('/my/2nd/endpoint', (req, res) => {
//   res.json({ data: 43, description: 'just some number' });
// });

// const router2 = express.Router();
// router2.get('/xyz', (req, res) => {
//   res.send('xyz');
// });

// router.use('/abc', router2);

// router.use('/self', router);



// server.use('/qqq', router);

// server.use('/asdf', router);
// /asdf/my/new/endpoint
// /asdf/my/2nd/endpoint