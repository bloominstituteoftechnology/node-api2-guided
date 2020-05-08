
// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

const app = require('./server.js');

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`\n*** Server Running on http://localhost:${PORT} ***\n`);
});
