
const db = require ('../database/models')
const op = db.sequelize.op;

const userControllers = {
    // registracion: function (req,res) {
    //     res.render('registracion')        
    // },
    login: function (req,res) {
        res.render('login')
},


miPerfil: async function (req,res) {
    if (!req.session.user) {
        res.send('NO EXISTE EL USUARIO')
    }
    const user = await db.usuarios.findByPk(req.session.user.id_usuario, {
        include: [{association: 'posts'}]
    });
  
    res.render('miPerfil', {user});

},  

editarPerfil:function (req,res) {
    res.render('editarPerfil')
    
},
store: function (req,res) { 
    if (req.file) req.body.imagen = (req.file.destination + req.file.filename).replace('public', ''); 
      // remplazo public x nada y solo agarro lo q hay en el objeto de req.file, quiero desitnation y filename
      db.usuarios.create({
        ...req.body,
        id_usuario: req.session.user.id_usuario,
      }).then(post => {
        res.redirect('/');
      }).catch(error => {
        return res.render(error);
      })
  },
  

//! Inplemente la asociaccion 
detalleUsuario: async function (req,res) {
    const user = await db.usuarios.findByPk(req.params.id, {
        include: [{association: 'posts'}]
    });
  
    res.render('detalleUsuario', {user});

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