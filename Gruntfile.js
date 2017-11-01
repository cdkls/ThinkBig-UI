module.exports = function(grunt) {
 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
 
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: false,
                singleton: true
            }
        }
    });
 
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('jasmineTest', ['karma']);
};