# karma-blink1-reporter

> Reporter using Blink(1) to display results.


## Installation

1. Install Karma and karma-blink1-reporter plugin.

  a. Globally. System-wide with `karma` available on command line.

    ```sh
    npm install -g karma
    npm install -g karma-blink1-reporter
    ```

  b. Locally to your project (preferred). Simply run:

    ```sh
    npm install karma --save-dev
    npm install karma-blink1-reporter --save-dev
    ```

    or add the dependencies to `package.json` manually and run `npm install`:

    ```js
    "devDependencies": {
      "karma": ">=0.9",
      "karma-blink1-reporter": "*"
    }
    ```

    If you install locally, you'll need to run Karma using `node_modules/karma/bin/karma`.

  In any case, the plugin needs to be installed as a peer dependency to Karma (i.e. in the sibling folder). This just means you cannot use global Karma with local plugins or vice-versa.


2. Add it as a reporter in the config file

  ```js
  reporters: ['progress', 'blink1']
  ```

  or pass through the command line

  ```sh
  $ karma start --reporters=progress,blink1 karma.conf.js
  ```

## License

MIT License
