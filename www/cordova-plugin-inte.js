var exec = require('cordova/exec');

function plugin() {

}

plugin.prototype.new_activity = function () {
	exec(function (done) {
		console.log('INTE :: DONE', done);
	}, function (fail) {
		console.log('INTE :: FAIL', done);
	}, "PluginName", "new_activity", []);
}

module.exports = new plugin();