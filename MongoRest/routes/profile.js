const express = require('express');
const router = express.Router();
const Profile_controller = require('../controllers/profile');

router.get('/', Profile_controller.userDetails);
router.get('/:id', Profile_controller.userDetailsById);
router.post('/add', Profile_controller.insertUser);
router.post('/login', Profile_controller.checkLogin);
router.put('/:id', Profile_controller.updateUser);
router.delete('/:id', Profile_controller.deleteUser);

module.exports = router;