var Clipboard = require('clipboard');

module.exports = new Clipboard('.clipy', {
      target: function(trigger) {
          return trigger.nextElementSibling;
      }
  });
