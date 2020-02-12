const express = require('express');
const router = express.Router();
const ingredient_controller = require('../controller/ingredient.controller');

router.get('/',ingredient_controller.ingredient_list);
router.get('/:id',ingredient_controller.ingredient_detail);
router.post('/',ingredient_controller.ingredient_add);
router.put('/:id',ingredient_controller.ingredient_edit);
router.delete('/:id',ingredient_controller.ingredient_delete);

module.exports = router;