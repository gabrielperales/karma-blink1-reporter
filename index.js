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
      exec('blink1-tool --red --blink '+results.failed+' -m 50 -t 100');
    } else {
      exec('blink1-tool --green --blink 1');
    }
  }
};

Blink1Reporter.$inject = ['helper', 'logger', 'config'];

module.exports = {
  'reporter:blink1': ['type', Blink1Reporter]
};
