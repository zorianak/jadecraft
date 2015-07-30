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
	  },
	concat: {
		basic_and_extras: {
			files: {
				'public/javascripts/dist/chars.js': [
				  'public/javascripts/src/vendor/jquery-2.1.4.min.js',
				  'public/javascripts/src/stats/avgWdps.js',
				  'public/javascripts/src/stats/stat.js',
				  'public/javascripts/src/char.js',
				  'public/javascripts/src/spells/spell.js',
				  'public/javascripts/src/spells/spellList.js',
				  'public/javascripts/src/global.js',
				  'public/javascripts/src/ui/popResults.js'
				],
				'public/javascripts/dist/home.js': [
				  'public/javascripts/src/vendor/jquery-2.1.4.min.js'
				]
			}
		}
		  
	}
	  
  });

    grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['concat']);

};
