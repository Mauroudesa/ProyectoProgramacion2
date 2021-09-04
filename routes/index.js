var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/',indexController.index)
//router.get('/ususarios/:id',falsebookController.id)

module.exports = router;
