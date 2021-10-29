
const db = require('../database/models')
const op= db.sequelize.op;

const posteosControllers = {
    agregarPost: function (req,res) {
        res.render('agregarPost')        
    },
    store: function (req,res) { 
        console.log(req.body); // aca voiy a poner el contenido del form     
        //Guardo en la DB
        if(req.file)req.body.image = (req.file.destination + req.file.filename).replace('public','');// remplazo public x nada y solo agarro lo q hay en el objeto de req.file, quiero desitnation y filename
        db.posteos.create({
            contenido: req.body.contenido,
            nombre_usuario: req.session.user.id
        }).then(post => {
            res.redirect('/');
        }).catch(error =>{
            return res.render(error);
        })
    },
    detallePost: async function  (req,res) {
        const posts = await db.posteos.findByPk(req.params.id);
        const comments= await db.comentarios.findAll({where:{id_post:req.params.id}})
        const user= await db.usuarios.findAll({where:{id_usuario:req.params.id}})

        res.render('detallePost', {posts,comments,user})        
    },
    edit: async function(req, res) {
        const post = await db.posteos.findByPk(req.params.id)
        if (!post) {
          return res.render('error');
        }
  
        res.render('editarPosteo', {post});
      },
      update: function(req, res) {
        db.posteo.update(req.body, { where: { id: req.params.id }}).then(posteo => {
          res.redirect('/');
        }).catch(error => {
          return res.render(error);
        })
      },
      delete: function(req, res) {
        // Chequear que sea el dueño
        db.posteos.destroy({ where: { id: req.params.id }})
        .then(() => {
          res.redirect('/');
        }).catch(error => {
          return res.render(error);
        })
      },
      comment: function(req, res) {
          //No hace falta hacer el if de si esta logueado porque la lo hice en EJS, no?
        db.comentarios.create({
          id_post: req.params.id,
          nombre_usuario: req.session.user.id,
          contenido:req.body.contenido,
          
        }).then(posteos => {
          res.redirect('/posteo/'+req.params.id);
        }).catch(error => {
          return res.send(error);
        })
      },
      
}
module.exports = posteosControllers;
