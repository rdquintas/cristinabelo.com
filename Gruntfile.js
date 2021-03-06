module.exports = function (grunt) {
  var js_files_vendor = [
    // 'user/themes/zrq/js/vendor/jquery.parallax-1.1.3.js',
    // 'user/themes/zrq/js/vendor/jquery.localscroll-1.2.7-min.js',
    // 'user/themes/zrq/js/vendor/jquery.scrollTo-1.4.2-min.js'
  ]

  var js_files = [
    'user/themes/zrq/js/app.js'
  ]

  var css_files = [
    'user/themes/zrq/css/globals.css',
    'user/themes/zrq/css/home_page.css',
    'user/themes/zrq/css/default_page.css',
    'user/themes/zrq/css/bio_page.css'
  ]

  // grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-standard')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')

  // ================================
  // Task:    default
  // ================================
  grunt.registerTask('default', [
    'standard:js_files',
    'concat:js_files',
    'concat:js_files_vendor',
    'concat:css_files'
  ])

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // ================================
    // WATCH
    // ================================
    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        },
        tasks: [
          'default'
        ]
      },
      js_files: {
        files: js_files,
        tasks: [
          'standard:js_files',
          'concat:js_files',
          'concat:js_files_vendor'
        ],
        options: {
          event: ['all'],
          interrupt: true
        }
      },
      css_custom: {
        files: 'user/themes/zrq/css/*.css',
        tasks: [
          'concat:css_files'
        ],
        options: {
          event: ['all'],
          interrupt: true
        }
      }
    },

    // // ================================
    // // STANDARDJS
    // // ================================
    standard: {
      js_files: {
        src: js_files
      }
    },

    // // ================================
    // // JSHINT
    // // ================================
    // jshint: {
    //   js_files: {
    //     src: js_files
    //   }
    // },

    // ================================
    // CONCAT
    // ================================
    concat: {
      options: {
        sourceMap: true
      },
      js_files_vendor: {
        src: js_files_vendor,
        dest: 'user/themes/zrq/js/dist/libs.dist.js'
      },
      js_files: {
        src: js_files,
        dest: 'user/themes/zrq/js/dist/app.dist.js'
      },
      css_files: {
        src: css_files,
        dest: 'user/themes/zrq/css/dist/app.dist.css'
      }
    }

  })
}
