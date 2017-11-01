exports.config = {
baseUrl: 'https://thinkbigshop-ui.cfapps.io',

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