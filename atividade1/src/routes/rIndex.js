const express = require('express');
const router = express.Router();
const indexController = require('../controllers/cIndex')


router.get('/', indexController.get);
router.post('/', indexController.post);
router.get('/submitted', indexController.submitted);
// router.delete('/:id', controller.delete);


module.exports = router;