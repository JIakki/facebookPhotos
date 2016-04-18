

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                files: {
                    'dist/index.min.js': ['js/jquery.plugin.js']
                }
            }
        },

        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'dist/index.css': ['css/component.css']
            }
          }
        },

        watch: {
            js: {
                files : ['js/**/*.js'],
                tasks : ['uglify', 'copy']
            }
        },

    });

    grunt.registerTask('default', [ 'cssmin', 'uglify', 'watch']);
};
