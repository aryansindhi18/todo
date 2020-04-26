const express = require("express");
const app = express();
const port = 500;

app.listen(port,function(err){
    if(err){
        console.log('error in app.listen',err);
    }
    console.log('server running on port:',port);
});