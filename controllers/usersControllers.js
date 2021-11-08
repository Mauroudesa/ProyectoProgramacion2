
const db = require ('../database/models')
const op= db.sequelize.op;

const userControllers = {
    // registracion: function (req,res) {
    //     res.render('registracion')        
    // },
    login: function (req,res) {
        res.render('login')
},
miPerfil: async function (req,res) {
    const users = await db.usuarios.findByPk(req.params.id);
    const posts= await db.posteos.findAll({where: {id_usuario_creo: req.params.id}});// NO ENTIENDO XQ MATCHEAMOS ID A NOMBREUSUARIO

    res.render('miPerfil', {users, posts})  
    
},
editarPerfil:function (req,res) {
    res.render('editarPerfil')
},
detalleUsuario: async function (req,res) {
    const user= await db.usuarios.findByPk(req.params.id);
  //  include:[{association:'posteos'}] Esto va en ves de Posts, le pongo posteos porque es lo que le puse en la asociacion
    
    const posts = await db.posteos.findAll({where: {id_usuario_creo: req.params.id}});// Si la funcion es asincronica puedo usar await. el async es como una promesa. Lo uso en ves del catch, es mas limpio
    res.render('detalleUsuario', {user, posts});
},
// login: function (req,res) { 
//     console.log(req.body); // aca voiy a poner el contenido del form     
//     //Guardo en la DB
//     db.usuarios.create({ 
//         //body
//         contenido: req.body.contenido
//     }).then(post => {
//         res.redirect('login');
//     }).catch(error =>{
//         return res.render(error);
//     })
// },
// store: function (req,res) { 
//     console.log(req.body); // aca voiy a poner el contenido del form     
//     //Guardo en la DB
//     db.usuarios.create({
//         contenido: req.body.contenido
//     }).then(post => {
//         res.redirect('/');
//     }).catch(error =>{
//         return res.render(error);
//     })
// },
}
module.exports = userControllers;