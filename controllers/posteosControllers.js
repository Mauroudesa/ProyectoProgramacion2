
const db = require('../database/models')
const op = db.sequelize.op;

const posteosControllers = {
    agregarPost: function (req,res) {
        res.render('agregarPost')        
    },
    store: function (req,res) { 
      if (req.file) req.body.imagen = (req.file.destination + req.file.filename).replace('public', ''); 
        // remplazo public x nada y solo agarro lo q hay en el objeto de req.file, quiero desitnation y filename
        db.posteos.create({
          ...req.body,
          id_usuario_creo: req.session.user.id_usuario,
        }).then(post => {
          res.redirect('/');
        }).catch(error => {
          return res.render(error);
        })
    },

    detallePost: async function  (req,res) {
        const post = await db.posteos.findByPk(req.params.id,
          { include: [
            { association: 'comments' }

          ]}
          )

        
            if (!post) {
              return res.render ('error')
            }
        

        res.render('detallePost', {post});        
    },

    edit: async function(req, res) {
        const post = await db.posteos.findByPk(req.params.id)
        if (!post) {
          return res.render('error');
        }
  
        res.render('edit', {post});
      },
      update: function(req, res) {
        if (req.file) req.body.imagen = (req.file.destination + req.file.filename).replace('public', '');
        db.posteos.update({
          precio_sol: req.body.contenido,
          ...req.body,
          id_usuario_creo: req.session.user.id_usuario,

        }, { where: { id_post: req.params.id }}).then(posteos => {
          res.redirect('/');
        }).catch(error => {
          return res.render(error);
        })
      },

      delete: function(req, res) {
        // Chequear que sea el dueño
        db.posteos.destroy({ where: { id_post: req.params.id }})
        .then(() => {
          res.redirect('/');
        }).catch(error => {
          return res.render(error);
        })
      },
      comment: function(req, res) {
         console.log(req.session.user) //No hace falta hacer el if de si esta logueado porque la lo hice en EJS, no?
        db.comentarios.create({
          id_post: req.params.id,
          id_usuario: req.session.user.id_usuario,
          contenido:req.body.contenido,
          
        }).then(posteos => {
          res.redirect('/posteo/'+req.params.id);
        }).catch(error => {
          return res.send(error);
        })
      },
      
}
module.exports = posteosControllers;
