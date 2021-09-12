var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersControllers');
//router.get('/', usersController.index)
//router.get('/usuarios/:id',falsebookController.id)
router.get('/registracion',usersController.registracion);
router.get('/login',usersController.login);
router.get('/miPerfil',usersController.miPerfil);
router.get('/editarPerfil',usersController.editarPerfil);
router.get('/detalleUsuario',usersController.detalleUsuario);
module.exports = router;
