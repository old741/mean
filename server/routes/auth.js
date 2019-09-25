const router = require('express').Router();
const User = require('../models/user.model');
// librairie qui permet d'encrypter des passwords
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');//fs = filse system de node permet de lire un fichier

const RSA_KEY_PRIVATE_SECRET = fs.readFileSync('./rsa/key');//executer au lacement du serveur le (.) décrit l'endroit ou on a lancer le serveur soit npm start ou nodemon
router.post('/signin', (req,res)=>{
    console.log('req.body');
    User.findOne({'email': req.body.email}).exec( (err,user) => {
        // user.password de la bdd
        // req.body.password du formulaire
        if(user && bcrypt.compareSync(req.body.password,user.password)){
            const token = jwt.sign({},RSA_KEY_PRIVATE_SECRET,{
                //header
                algorithm:'RS256',
                subject: user._id.toString()
            })
            res.status(200).json(token);
        }else{
            res.status(401).json('signin fail ! email fail');// exception unauthorized on essaye d'accer a une ressource
            // et on est pas authorisé à le faire
        }
    })
  //  res.json('signin OK !')
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