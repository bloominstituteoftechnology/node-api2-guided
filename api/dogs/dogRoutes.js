const express = require('express');

const router = express.Router(); 

const Dog = require('./dogs-model');


router.get('/', (req, res) => {
    Dog.find()
      .then(dogs => {
        res.status(200).json(dogs);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving the dogs',
        });
      });
  });
  

  router.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Shelter API</h>
      <p>Welcome to the Lambda Shelter API</p>
    `);
  });

  module.exports = router;