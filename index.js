require('shelljs/global');
var root = __dirname;

var Blink1Reporter = function(helper, logger, config) {
  var log = logger.create('reporter.blink1');

  this.onBrowserComplete = function(browser) {
    report(browser.lastResult, browser);
  };

  this.onRunComplete = function(browsers, results) {
    if (browsers.length <= 1 || results.disconnected) { return; }

    report(results);
  };

  this.onRunStart = function() {
    exec('blink1-tool --blue --blink 1');
  };

  function report(results, browser) {
    if (results.disconnected || results.error) {
      exec('blink1-tool --random 5');
    }
    else if (results.failed) {
      exec('blink1-tool --red');
    } else {
      exec('blink1-tool --green');
    }
  }
};

Blink1Reporter.$inject = ['helper', 'logger', 'config'];

// PUBLISH DI MODULE
module.exports = {
  'reporter:blink1': ['type', Blink1Reporter]
};
