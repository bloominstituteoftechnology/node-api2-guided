const express = require('express');

const router = express.Router();

router.get('/my/special/api/endpoint', (req, res) => {
res.json({message: 'it is alive'})
});













module.exports = router;