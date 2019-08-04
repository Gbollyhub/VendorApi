//app.js is the root file
 //Step1:  imported express server
const express = require("express")

//Step2: saved the express plugin into variable app i.e const app( note: the name can be anything)
const app = express();

//Step3: Created a port & server for our node app to run on (note: the port can be any number eg 2020, 4000, ect)
const port = 8000
app.listen(port, () => {
    console.log("Server running on port 8000")
})

//Step 4: since we are using mongodb as our database, mongoose package is imported
const mongoose = require('mongoose')
//Step 5: We connect to our database using the mongodb url
//(mongodb+srv://gbolly:<password>@nodedb-jeucv.mongodb.net/test?retryWrites=true&w=majority)
//the url upthere is what u will get but u have to edit it
//replace <password> with your database password and clear (test?retryWrites=true&w=majority), replace with database name
mongoose.connect("mongodb+srv://gbolly:gbolly@nodedb-jeucv.mongodb.net/nodedb", {useNewUrlParser: true})
.then( () => {
    console.log("Database connected")
})
mongoose.connection.on("error", err => {
    console.log(`DB connection error : ${ err.message }`)
})


//This part contains your routes( the routes contains all the endpoints)
const vendorRoutes = require("./routes/vendor")
app.use("/", vendorRoutes);

//This are middlewares that enable the nodeapp to run well ( there are just like the engine)
//cors enable outside connection with the nodeapp
const cors = require('cors')
app.use(cors());
//bodyparser allows the app to get input from client
const bodyParser = require('body-parser')
app.use(bodyParser.json());
//morgan is a logger middleware function
const morgan = require('morgan')
app.use(morgan("dev"));



