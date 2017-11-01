module.exports = function(config) {
    config.set({
        basePath: './',
        browserNoActivityTimeout: 100000,
        browserDisconnectTolerance: 2,
        frameworks: ['jasmine'],
        files: [
            'js/**/*.js',
            'js/*.js',
            'node_modules/**/*.js',
            'spec/*.spec.js'
        ],
        exclude: [
        ],
        reporters: ['progress'],
        port: 9876,
        plugins: [
                  'karma-phantomjs-launcher',
                  'karma-jasmine'
                ],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        captureTimeout: 60000,
        singleRun: false
    });
};