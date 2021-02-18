const express = require('express');

const adopterRoutes = require('./api/adopters/adopterRoutes.js');
const dogRoutes = require('./api/dogs/dogRoutes.js');


const server = express();


server.use('/adopters', adopterRoutes);
server.use('/dogs', dogRoutes);


server.listen(8000, () => console.log('API running on port 8000'));

