const path = require("path");
const fs = require("fs");

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('string-replace-loader'),
    ],
    preprocessors: {
      "test/index.ts": ["webpack"],
    },
    files: [
      "test/index.ts"
    ],
    webpack:  {
      resolve: {
        extensions: ['.js', '.ts', '.json']
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            loader: 'string-replace-loader',
            options: {
              search: 'file-replace!!(.*)!!',
              replace: (match, p1, ) => fs.readFileSync(path.resolve(__dirname, p1), 'utf8').replace(/\r?\n|\r/g, " "),
              flags: 'g'
            }
          },
          {
            test: /\.ts$/,
            use: 'ts-loader'
          },
          {
            test: /\.ts$/,
            exclude: [ /node_modules/, path.resolve(__dirname, "test"), /\.spec.ts$/ ],
            enforce: 'post',
            use: {
              loader: 'istanbul-instrumenter-loader',
              options: { esModules: true }
            }
          },

        ]
      }
    },
    client: {
      jasmine: {
        random: false
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/frontend'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['coverage', 'progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    restartOnFileChange: true
  });
};
