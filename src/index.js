var express = require("express");
var app = express();
var fs = require('fs');

app.use(express.json());

app.get('/get_meta_data/*', (req, res, next)=>{

    fs.readFile(__dirname+"/ui-config/specification"+req.url.replace('/get_meta_data', "")+".json", 'utf-8', (err, data)=>{
        if(err){
            res.send({"msg":"no such file present in specified path"});
        }else{
            res.json(JSON.parse(data))
        }
        
    })
})

app.listen(8000);