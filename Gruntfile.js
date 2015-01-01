module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      simplemocha: {
        options: {
          globals: ['should'],
          timeout: 3000,
          ignoreLeaks: false,
          grep: '*-test',
          ui: 'bdd',
          reporter: 'tap'
        },

        all: { src: 'test/**/*.js' }
      }
  });

    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.registerTask('default', 'simplemocha');

};
