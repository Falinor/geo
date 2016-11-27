const controller = require('./area-controller');
const Router = require('express').Router;
const router = new Router();

router.route('/')
  .get((...args) => controller.findAll(...args));

module.exports = router;
