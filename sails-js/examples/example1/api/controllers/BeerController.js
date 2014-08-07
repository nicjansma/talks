/**
 * BeerController
 *
 * @description :: Server-side logic for managing beers
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  drink: function (req, res) {
    if (!req.params.id) { return res.badRequest('ID not supplied'); }

    Beer.findOne({ id: req.params.id }, function(err, model) {
      if (err || !model) {
        return res.badRequest('Beer not found');
      }

      model.have--;

      model.save(function(err) {
        return res.ok(model);
      });
    });
  },
  show: function(req, res) {
    Beer.find({}, function (err, beers) {
      res.view('show-beers', { title: 'Beers', beers: beers });
    });
  }
};

