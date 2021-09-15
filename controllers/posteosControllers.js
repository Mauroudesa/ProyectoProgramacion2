const posts = require('../data/posts')

const posteosControllers = {
    agregarPost: function (req,res) {
        res.render('agregarPost')        
    },
    detallePost: function (req,res) {
        const post = posts.find(req.params.id)
        res.render('detallePost', {post})        
    }
}
module.exports = posteosControllers;