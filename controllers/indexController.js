//const posts = require('../data/posts')
const db = require('../database/models')
const op= db.sequelize.op
const bcrypt = require('bcryptjs');

const controllers = {
  index: function (req,res) {
        db.posteos.findAll()// la promesa aca es que te va a traer todos lo sposteos, findall
  
        .then((posts)=>{// solo si la promesa se cumple
            res.render('index', {posts})  
        })      
        .catch((error)=>{ //ataja el error
            res.send(error)
        })
        },
 search: async function (req,res) {
        const posts = await db.posteos.findAll({where: {[op.like]:"%"+req.query.criteria+"%"}})
 
    res.render('search', {criteria:req.query.criteria} )
},
registracion: function (req,res) {
    res.render('registracion')        
},
login: async function(req, res, next) {
    if (req.method == 'POST') {
      const user = await db.usuarios.findOne({ where: {nombre_usuario: req.body.nombre_usuario}});
      if (!user) {
        res.send('NO EXISTE EL USUARIO')
      }
      if (bcrypt.compareSync(req.body.contrasena, user.contrasena)) { //no desencripta, compara. se fija que provengan del mismo origen.
       req.session.user = user;
       res.cookie('user', user, { maxAge: 1000 * 60 * 60 * 24 * 30 })// guardo los datos del usuario en la cookie. PUEDO AGREGAR EL REMEMBERMEN
       // add user to session
       res.redirect('/');
      } else {
        res.send('LA CONSTRASEÑA ES INCORRECTA')
      }
    } else {
      res.render('login');
    }
  },
  store: async function(req, res) {
    req.body.contrasena = bcrypt.hashSync(req.body.contrasena, 10);
    db.usuarios.create({
        nombre_usuario: req.body.nombre_usuario,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        contrasena: req.body.contrasena
    })

    .then(posteos => {
      res.redirect('/login');
    }).catch(error => {
      return res.send(error);
    })
  },
  logout: function(req, res, next) {
    res.clearCookie('user');
    req.session.user = null;
    res.redirect('/');
  },
}
const validateUser = function (req) {
    const errors = [];
    if (req.body.contrasena.length < 5) {
      errors.push('LA CONSTRASEÑA ES INSEGURA');
    }
    if (!req.body.apellido) {
      errors.push('EL APELLIDO ES REQUERIDO');
    }
    return errors;
  }
module.exports = controllers;


