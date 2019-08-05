const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user');

router.get('/', user_controller.userDetails);
router.get('/:id', user_controller.userDetailsById);
router.post('/', user_controller.insertUser);
router.put('/:id', user_controller.updateUser);
router.delete('/:id', user_controller.deleteUser);

module.exports = router;