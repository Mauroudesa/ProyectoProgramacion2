var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersControllers');
//router.get('/', usersController.index)
//router.get('/usuarios/:id',falsebookController.id)
//router.get('/registracion',usersController.registracion);
//router.post('/registracion',usersController.store);
//router.get('/login',usersController.login);
router.get('/miPerfil/:id',usersController.miPerfil);
router.get('/editarPerfil/:id',usersController.editarPerfil);
router.get('/detalleUsuario/:id',usersController.detalleUsuario);
module.exports = router;
