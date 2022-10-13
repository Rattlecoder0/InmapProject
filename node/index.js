var express = require("express")

const cors = require('cors');
var app = express();
app.use(cors());


var bodyparser = require('body-parser')
var jsonparser = bodyparser.json()


app.get("/", (req,res) => {
    console.log('Hii Friends')
    res.send('Welcome to World')
})

// ------mongodb atlas connection 
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ubaid:ubaidmongo@cluster0.tydgi75.mongodb.net/category?retryWrites=true&w=majority", {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>{console.log('Mongodb Atlas connection establish')
}).catch((err)=>{
    console.log(err)
})

var user = require('./model/model')

var users = require('./routes/user')


// mongodb read data
app.get('/getData',(req,res)=>{
    user.find().then((mdata)=>{
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})



app.use('/user',users)


// Add Data
app.post('/addData',jsonparser,(req,res)=>{
    const userdata = new user({
        _id: new mongoose.Types.ObjectId,
        catid: req.body.catid,
        prodid: req.body.prodid,
        prodname: req.body.prodname,
        prodprice: req.body.prodprice,
        catname: req.body.catname
    })
    userdata.save().then((mdata)=>{
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})



// Update / Put Data

app.put('/updateData/:id',jsonparser,(req,res)=>{
    user.updateOne({_id: req.params.id},
        {
            $set:{
                catid: req.body.catid,
                prodid: req.body.prodid,
                prodname: req.body.prodname,
                prodprice: req.body.prodprice,
                catname: req.body.catname
            }
        }).then((mdata) =>{
            console.log(mdata)
        }).catch((err)=>{
            console.log(err)
        })
    
})


// // Delete api

app.delete('/deleteData/:id',(req,res)=>{
user.deleteOne({_id: req.params.id}).then((mdata)=>{
    console.log(mdata)
    res.send(mdata)
}).catch((err)=>{
    console.log(err)
})
})


//Find data / search api

app.get('/searchData/:id', jsonparser, (req,res) => {
    console.log( req.params.id)
    user.find({_id: req.params.id}).then((mdata) => {
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})


//category wise data api
app.get('/catData/:name', jsonparser, (req,res) => {
    user.aggregate([{$match:{catname: req.params.name}}]).then((mdata) => {
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})


// get single data


app.listen(3000, ()=>{
    console.log("server is running")
});