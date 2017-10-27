exports.config = {
baseUrl: 'http://localhost:3000',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: [
        './test/e2e/home-page-spec.js'
    ],

    framework: 'jasmine',
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000,
      print: function() {}
    },
    directConnect: true
    

};