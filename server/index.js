const Koa = require("koa")
const koaBody = require('koa-body')
const Mongo = require('./utils/db')
const router = require('./middleware/router')
const errorCatcher = require('./middleware/error-catcher')
const customLogger = require('./middleware/custom-logger')
const utils = require('./utils/utils')
const cors = require("@koa/cors")

const serverPort = process.env.SERVER_PORT
const mongoPort = process.env.MONGO_PORT
const dbName = "testdb"

const app = new Koa()

/*
Setup cors to allow react app to make requests
*/
app.use(cors());

if(utils.isDevelopment()){
    console.log("Server starting in DEVELOPMENT mode")
}else if(utils.isProduction()){
    console.log("Server starting in PRODUCTION mode")
}

/*
Connect to the database. The connection is then stored in require('./utils/db').db
*/
Mongo.connect(dbName).then(() => {
    console.log("Connected to MongoDB on port: " + mongoPort);
}).catch(e => {
    console.log(e);
})



/*
This is basically a try and catch that encapsulate every route.
I'm not sure this is a safe pattern, but it always worked well for me.
To avoid using it just remove the line.
*/
app.use(errorCatcher);

/*
Logs HTTP requests in the console. I built one because I didn't find one I liked.
To avoid using it just remove the line.
*/
app.use(customLogger);


app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(serverPort, () => console.log("Server listening on port: " + serverPort))