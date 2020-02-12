const express = require('express');
const router = express.Router();
const composition_controller = require('../controller/composition.controller');

router.get('/',composition_controller.composition_list);
router.get('/:id',composition_controller.composition_detail);
router.post('/',composition_controller.composition_add);
router.put('/:id',composition_controller.composition_edit);
router.delete('/:id',composition_controller.composition_delete);

module.exports = router;