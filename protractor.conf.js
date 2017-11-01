exports.config = {
baseUrl: 'http://localhost:8080',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        './test/e2e/tests/Home/home-page-spec.js'
    ],

    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function() {}
    },
    directConnect: true
    

};