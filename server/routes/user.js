const router = require('express').Router();
const fs = require('fs'); // file systeme
const RSA_PUBLIC_KEY = fs.readFileSync('./rsa/key.pub');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

//isLoggedIn est un middleware en express 
// un peu comme un interceptor donc on traite l'information aprs on continu l'execution de la requete
function isLoggedIn(req, res,next){
    const token = req.headers.authorization;
    if(token){
        // verify pour vérifier le token le token + la clé public
        jwt.verify(token,RSA_PUBLIC_KEY, (err,decoded)=>{
            // si err c'est un user qui a essayé de faire croire qu'il avit un token valiede
            if(err){ return res.status(401).json('Token invalide')}
            // decoded = tout ok
                const sub = decoded.sub;
                console.log(['decoded = '],decoded);
                User.findOne({ '_id': sub }).exec( (err,user)=>{
                if(err || !user){ res.status(401).json('error || pas de user on ne sais pas trop') }
                console.log(' user = ',user);
                req.user= user;
                next();
            })
        });
        //next permet de finir notre querri
        
    }else{
        res.status(401).json('pas de token !')
    }
  // res.json(req.headers);
    
}


router.get('/current', isLoggedIn, (req, res) => {
    res.json(req.user);
  })
  
  module.exports = router;