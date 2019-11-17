'use strict';

module.exports = function(app) {
  var controller = require('./controller');
  
  app.route('/credit-cards')
    .get(controller.getAllCreditCards);
    
  app.route('/credit-cards')
    .post(controller.addCreditCard);

};
