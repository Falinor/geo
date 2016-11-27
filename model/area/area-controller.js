const Controller = require('../../lib/controller');
const areaFacade = require('./area-facade');

class AreaController extends Controller {}

module.exports = new AreaController(areaFacade);
