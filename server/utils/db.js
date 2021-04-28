const utils = require('./utils')
const MongoClient = require('mongodb').MongoClient

const dbUsername = process.env.MONGO_USERNAME
const dbPassword = process.env.MONGO_PASSWORD
const dbPort = process.env.MONGO_PORT
const dockerMongoName = utils.isProduction() ? "mongo-prod" : "mongo"

const dbUrl = "mongodb://"+dbUsername+":"+dbPassword+"@"+dockerMongoName+":"+dbPort

class Connection {
    /*
    Call this function on server setup (usually index.js or server.js)
     */
    static async connect(dbName) {
        try {

            if (this.db) return;
            
            this.client = await MongoClient.connect(this.url, this.options);

            if (this.client) {
                this.db = this.client.db(dbName);
                return;
            }
        }catch(e){
            throw e;
        }
    }
}

//Variables
Connection.client = null
Connection.db = null

//Settings
Connection.url = dbUrl
Connection.options = {
    bufferMaxEntries:   0,
    useNewUrlParser:    true,
    useUnifiedTopology: true,
}

//Export
module.exports = Connection