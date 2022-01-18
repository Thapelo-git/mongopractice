const {MongoClient}=require("mongodb")

const url ="mongodb://localhost:27017";

const connection=()=>{
     MongoClient.connect(url)
     .then(()=>console.log("connected"))
     .catch((err)=>console.log("not connected"))
}

module.exports=connection;