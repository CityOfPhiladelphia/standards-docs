var List = require('list.js');

module.exports = $(function(){
  var options = {
    valueNames: [ 'title', 'content' ]
  };

  new List('filter-list', options);
});
