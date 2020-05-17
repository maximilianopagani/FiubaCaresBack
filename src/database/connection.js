/*
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

const uri = `mongodb+srv://administrator:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/test?retryWrites=true&w=majority`;

class Connection {

    constructor() {
        //this.client = (uri, { useNewUrlParser: true, useUnifiedTopology:true });
    }

    async getConnection(dbName, collectionName) {
        return await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology:true }, (err, client) => {
            if (err) {
                console.log(`[MongoDB connection] ERROR: ${err}`);
                throw (err); // this should be "caught" by the calling function
            }
            return client;
            /!*const dbObject = client.db(dbName);
            const dbCollection = dbObject.collection(collectionName);
            console.log("[MongoDB connection] SUCCESS");

            return dbCollection;*!/
        });
    }
}

module.exports = Connection;*/
