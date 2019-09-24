const router = require('express').Router();
const User = require('../models/user.model');
// librairie qui permet d'encrypter des passwords
const bcrypt = require('bcrypt');

router.post('/signin', (req,res)=>{
    console.log('req.body');
    res.json('signin OK !')
});

router.post('/signup', (req,res)=>{
    const salt= bcrypt.genSaltSync(8);
    const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        //hashSync = creer le cryptage
        password: bcrypt.hashSync(req.body.password,salt)
    })

    newUser.save( (err)=>{
        // on aurait vérifier que nous avions bien un email un password un name
        if(err){ res.status(500).json('erreur signup')}
        res.status(200).json('signup ok !');
    })
    console.log('req.body');
   // risque d'etre call avant le save car c'est de l'asyncrone res.json('signup OK !')
    });
module.exports=router;