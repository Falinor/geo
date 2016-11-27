class Controller {
  constructor(facade) {
    this.facade = facade;
  }

  findOne(req, res, next) {
    return this.facade.findOne(req.query)
    .then(doc => res.status(200).json(doc))
    .catch(err => next(err));
  }

  findById(req, res, next) {
    return this.facade.findById(req.params.id)
    .then(doc => {
      if (!doc) { return res.status(404).end(); }
      return res.status(200).json(doc);
    })
    .catch(err => next(err));
  }

  findAll(req, res, next) {
    return this.facade.findAll(req.query)
      .then(doc => res.status(200).json(doc))
      .catch(err => next(err));
  }
}

module.exports = Controller;
