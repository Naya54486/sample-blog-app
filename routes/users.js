var express = require('express');
var router  = express.Router();

var user_controller = require('../controllers/userController');

// GET request for creating User.
router.get('/create', user_controller.user_create_get);

// POST request for creating User.
router.post('/create', user_controller.user_create_post);

// GET request to delete User.
router.get('/:user_id/delete', user_controller.user_delete_get);

// POST request to delete User
router.post('/:user_id/delete', user_controller.user_delete_post);

// GET request to update User.
router.get('/:user_id/update', user_controller.user_update_get);

// POST request to update User.
router.post('/:user_id/update', user_controller.user_update_post);

// GET request for one User.
router.get('/:user_id', user_controller.user_detail);

// GET request for list of all Users.
router.get('/', user_controller.user_list);

router.all('/', function(req, res) {
  // So, redirect to index page
  res.redirect('/');
});


module.exports = router;