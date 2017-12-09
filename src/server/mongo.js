import MongoDB from 'mongodb'
import Constants from '../config/constants'

const MongoClient = MongoDB.MongoClient;

export default function connect(callback) {
  MongoClient.connect(Constants.mongoUrl, function(err, client) {
    console.error(err);
    console.log("Connected successfully to server")
    client.close();
  })
}