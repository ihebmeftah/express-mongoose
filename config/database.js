const mongoose = require('mongoose');

dbConnection = () => mongoose.connect(process.env.MONGO_URI).then((v) => {
    console.log(`Connected to db ${v.connection.host}`);
}).catch(err => {
    console.error(` Error connecting to db ${err}`);
    process.exit(1);
});

module.exports = dbConnection