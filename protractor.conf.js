exports.config = {
baseUrl: 'http://thinkbigshop.cfapps.io',

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