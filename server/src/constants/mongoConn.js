const mongoose = require ("mongoose")
const connectionString = require("./connectionData")

mongoose.connect(connectionString)
.then(() => {
    console.log('DataBase Connected')
})
.catch(err => {
    console.log(err)
})