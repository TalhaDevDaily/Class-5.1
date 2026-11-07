const mongoose = require('mongoose');

function mongooseConnect() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log(`Connection with Database established!`))
    .catch(err => console.log(`Connection failed: ${err}`));
}

module.exports = mongooseConnect;
