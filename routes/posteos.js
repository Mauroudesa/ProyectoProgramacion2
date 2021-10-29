var express = require('express');
var router = express.Router();
const posteoController = require('../controllers/posteosControllers')
const multer = require('multer');
const upload = multer({dest:'public/images/'});

//router.get('/agregarPost',posteoController.agregarPost)
router.get('/agregarPost',posteoController.agregarPost)
router.post('/agregarPost',upload.single('image'), posteoController.store)

router.get('/:id',posteoController.detallePost)
router.post('/:id', posteoController.comment);
router.get('/:id/editarPosteo',posteoController.edit)
router.post('/:id/editarPosteo',posteoController.update)
router.post('/:id/borrarPosteo',posteoController.delete)




module.exports = router;
