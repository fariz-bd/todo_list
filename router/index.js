const express = require('express')
const router = express.Router()
const todo = require('../todo/router')
const user = require('../user/router')
const controller = require('../todo/controller')
const controlleruser = require('../user/controller')
const satpam = require('../midleware/aut')


// express.static(root, [options]);

router.use('/assets', express.static('assets'));

router.use('/todo', todo)
router.use('/user', user)
router.get('/edittodo/:id', satpam.cekUser, controller.tampilId)
router.get('/user', satpam.cekUser, controlleruser.getUser)


module.exports = router;