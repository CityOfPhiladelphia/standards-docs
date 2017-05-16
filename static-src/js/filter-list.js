var List = require('list.js');

module.exports = $(function(){
  var options = {
    valueNames: [ 'content' ]
  };

  new List('filter-list', options);
});
