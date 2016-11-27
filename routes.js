const Router = require('express').Router;
const router = new Router();

const area = require('./model/area/area-router');

router.use('/area', area);


module.exports = router;
