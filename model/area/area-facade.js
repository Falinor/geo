const Model = require('../../lib/facade');
const areaSchema = require('./area-schema');

class AreaModel extends Model {}

module.exports = new AreaModel(areaSchema);
