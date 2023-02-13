const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/backend",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

let db = mongoose.connection;
db.on("open", err =>{
    if(err){
console.log("###############ERROR BACKEND DATABASE IS NOT CONNECTED#############")
    }else{
        console.log("************BACKEND DATABASE IS CONNECTED************")
    }
});