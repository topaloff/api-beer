const express = require('express');
const router = express.Router();
const beer_controller = require('../controller/beer.controller');
const checkAuth = require('../middleware/checkAuth')

router.get('/',beer_controller.beer_list);
router.get('/:id',checkAuth,beer_controller.beer_detail);
router.post('/',beer_controller.beer_add);
router.put('/:id',beer_controller.beer_edit);
router.delete('/:id',beer_controller.beer_delete);

module.exports = router;