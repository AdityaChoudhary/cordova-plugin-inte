var exec = require('cordova/exec');

module.exports = function () {
	exec(function (done) {
		console.log('INTE :: DONE', done);
	}, function (fail) {
		console.log('INTE :: FAIL', done);
	}, "IntePlugin", "new_activity", []);
};