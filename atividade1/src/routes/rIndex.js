const express = require('express');
const router = express.Router();
const indexController = require('../controllers/cIndex')


router.get('/', indexController.get);
router.post('/', indexController.post);
router.get('/submitted', indexController.submitted);


module.exports = router;