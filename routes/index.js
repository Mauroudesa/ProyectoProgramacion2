var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

router.get('/',indexController.index)
router.all('/logout', indexController.logout);
router.all('/login', indexController.login);// SI TIENE GET O POST, QUE VENGA ACA
router.get('/registracion', indexController.registracion);
router.post('/registracion', indexController.store);
router.get('/search', indexController.search);

module.exports = router;
