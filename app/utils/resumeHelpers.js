
var Promise = require('promise-polyfill'); // poor ie polyfill

var helpers = {
  get: function () {
    return new Promise(
        function(resolve, reject) {
            var data = require('../../assets/resume.json');
            resolve(data);
        })
    .catch(function (err) {console.warn('Error in load json: ', err)})
  }
};

module.exports = helpers;