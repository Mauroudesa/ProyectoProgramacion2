var express = require('express');
var router = express.Router();
const posteoController = require('../controllers/posteosControllers')

router.get('/agregarPost',posteoController.agregarPost)
router.get('/detallePost',posteoController.detallePost)
//router.get('/ususarios/:id',falsebookController.id)

module.exports = router;
