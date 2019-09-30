var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var app = express();
const index= require('./routes/index');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));


mongoose.connect('mongodb+srv://toto:789456aze@angulardyma-mczpu.mongodb.net/test?retryWrites=true&w=majority'
,{ 
    keepAlive:true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true,
    useUnifiedTopology: true
  } ,(err)=>{
  if(err){
    console.log('Connection erreur : '+ err);
  }else{
    console.log("On est connecté");
  }
})

app.use(index);
// * pour récupérer toutes les requetes entrantes
// res pour response 
// le but est de retourné notre application angular quelque soit la requete entrantes 
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '../public/index.html'))// Notre application angular est situé dans notre dossier public un cran au dessus
});

module.exports = app;
