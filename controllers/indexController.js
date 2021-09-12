const posts = require('../data/posts')

const controllers = {
    index: function (req,res) {
        res.render('index', {posts: posts.lista})        
        }
    

}

module.exports = controllers;