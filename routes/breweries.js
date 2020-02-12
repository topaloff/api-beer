const express = require('express');
const router = express.Router();
const brewery_controller = require('../controller/brewery.controller');

router.get('/',brewery_controller.brewery_list);
router.get('/:id',brewery_controller.brewery_detail);
router.post('/',brewery_controller.brewery_add);
router.put('/:id',brewery_controller.brewery_edit);
router.delete('/:id',brewery_controller.brewery_delete);

module.exports = router;