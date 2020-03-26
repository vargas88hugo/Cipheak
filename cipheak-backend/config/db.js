const moongose = require('mongoose');
const dbURL = require('./properties');

/**
 * Function that connects express with mongodb Atlas
 */
module.exports = () => {
  moongose.connect(dbURL.DB, {
    useUnifiedTopology: true, 
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log(`Mongo Connected on ${dbURL.DB}`))
  .catch(err => console.log(`Connection has error ${err}`));

  process.on('SIGINT', () => {
    moongose.connection.close(() => {
      console.log(`Mongo is disconnected`);

      process.exit(0);
    });
  });
}