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
    },

    copy: {
      html: {
        expand: true,
        cwd: 'src/templates',
        src: '**',
        dest: 'dist/templates',
        flatten: true,
        filter: 'isFile',
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
};