const postModule = require('../data/posts')
const usuarios = require('../data/usuarios')

const userControllers = {
    registracion: function (req,res) {
        res.render('registracion')        
    },
    login: function (req,res) {
        res.render('login')
},
miPerfil:function (req,res) {
    res.render('miPerfil')
},
editarPerfil:function (req,res) {
    res.render('editarPerfil')
},
detalleUsuario:function (req,res) {
    const user = usuarios.findUsername(req.params.id);
    console.log(user);
    const posts = postModule.findByUser(user.id);

    res.render('detalleUsuario', {user, posts})
},

}
module.exports = userControllers;