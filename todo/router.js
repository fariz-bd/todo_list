var express = require('express');
const controller = require('./controller');
var router = express.Router()
const satpam = require('../midleware/aut')


router.post('/',satpam.cekUser, controller.add);

router.get('/',satpam.cekUser, controller.list);

router.put('/:id',satpam.cekUser, controller.editSave);

router.delete('/:id',satpam.cekUser, controller.delete);

module.exports = router;

