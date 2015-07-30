module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

      simplemocha: {
        options: {
          globals: ['should'],
          timeout: 3000,
          ignoreLeaks: false,
          grep: '*_test',
          ui: 'bdd',
          reporter: 'Nyan'
        },

        all: { src: 'test/**/*.js' }
      }
	  
//	  mocha: {
//		  test: {
//			options: {
//			  reporter: 'Nyan'
//			},
//			src: ['tests/**/*.html'],
//		  },
//		},
	  
  });

    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.registerTask('default', ['simplemocha']);

};
