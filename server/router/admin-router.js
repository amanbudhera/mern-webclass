const express = require('express')
const adminControler = require('../controllers/admin-controller')
const authMiddleware = require('../middlewares/auth-middleware')
const adminMiddleware = require('../middlewares/admin-middleware')
// const adminMiddleware = require('../middlewares/admin-middleware')

const router = express.Router()

router.route('/users').get(authMiddleware,adminMiddleware, adminControler.getAllUsers)

router.route('/users/:id').get(authMiddleware,adminMiddleware, adminControler.getUsersbyId)

router.route('/users/update/:id').patch(authMiddleware,adminMiddleware, adminControler.updateUserbyId)

router.route('/users/delete/:id').delete(authMiddleware,adminMiddleware,adminControler.deleteUserbyId)

router.route('/contacts').get(authMiddleware,adminControler.getAllContacts)

router.route('/contacts/delete/:id').delete(authMiddleware,adminMiddleware,adminControler.deletecontactsbyId)

module.exports = router