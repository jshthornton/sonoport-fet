module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      server: {
        options: {
          port: 9001,
          base: 'dist'
        }
      }
    },
    sass: {
      dev: {
        files: {
          'dist/css/main.css': 'src/sass/main.scss'
        },
        options: {
          bundleExec: true,
          trace: true,
          loadPath: []
        }
      }
    },
    watch: {
      sass: {
        files: ['src/sass/**/*'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};