var express = require('express');
var router = express.Router();
const posteoController = require('../controllers/posteosControllers');
const multer = require('multer');
const upload = multer({dest:'public/images/'});

//router.get('/agregarPost',posteoController.agregarPost)
router.get('/agregarPost',posteoController.agregarPost)
router.post('/agregarPost', upload.single('imagen'), posteoController.store)

router.get('/:id',posteoController.detallePost)
router.post('/:id', posteoController.comment);

router.get('/:id/edit',posteoController.edit)
router.post('/:id/edit',upload.single('imagen'), posteoController.update)

router.post('/:id/delete',posteoController.delete)
router.get('/:id/like',posteoController.like)





module.exports = router;
