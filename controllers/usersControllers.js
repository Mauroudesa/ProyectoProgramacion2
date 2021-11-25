
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

editarPerfil: async function(req, res) {
    const post = await db.usuarios.findByPk(req.params.id)
    if (!post) {
      return res.render('editarPerfil');
    }

    res.render('editarPerfil', {user});
  },
  update: function(req, res) {
    if (req.file) req.body.imagen = (req.file.destination + req.file.filename).replace('public', ''); 
    db.usuarios.update(req.body, {where: {id_usuario: req.params.id} }).then(post =>{ 
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

follow: function (req, res) {
    if (!req.session.usuarios){
      res.redirect('/usuarios/'+req.params.id); 
    }
    db.Follow.create ({ 
      Follower_id: req.session.usuarios.id,
      Following_id: req.params.id
    }).then(follow => {
      res.redirect('/usuarios'+req.params.id);
    }).catch(error => {
      return res.send(error);
    })
},

unfollow: function (req, res) {
  if (!req.session.usuarios){
    res.redirect('/usuarios/'+req.params.id);
  }
  db.Follow.destroy (
    { where : { follower_id: req.session.usuarios.id , Following_id: req.params.id}
  }).then(Follow => {
    res.redirect('/usuarios'+req.params.id);
}).catch(error => {
  return res.send(error);
})
}


//-----------------------------------------------------------------------------------------------------

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
