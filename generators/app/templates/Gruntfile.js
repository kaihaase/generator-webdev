// Generated on 2014-04-12 using generator-webapp 0.4.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/**/*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Handlebar
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-typescript');

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: {
      // Configurable paths
      app: 'app',
      dist: 'dist'
    },

    assemble: {
      options: {
        // flatten: true,
        layout: 'layout.hbs',
        layoutdir: '<%= config.app %>/templates/layouts',
        assets: 'dist/images',
        partials: ['<%= config.app %>/templates/partials/**/*.hbs']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/templates/pages/',
          src: '**/*.hbs',
          dest: '<%= config.dist %>/'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/templates/pages/',
          src: '**/*.hbs',
          dest: '.tmp/'
        }]
      }
    },

    // Compiles CoffeeScript to JavaScript
    coffee: {
      options: {
        sourceMap: true,
        sourceRoot: ''
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/scripts',
          src: '**/*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '**/*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },

    typescript: {
      base: {
        src: ['<%= config.app %>/scripts/**/*.ts'],
        dest: '.tmp/scripts',
        options: {
          module: 'amd', //or commonjs
          target: 'es5', //or es3
        }
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
      jstest: {
        files: ['test/spec/**/*.js'],
        tasks: ['test:watch']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      compass: {
        files: ['<%= config.app %>/styles/**/*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= config.app %>/styles/**/*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/*.html',
          '<%= config.app %>/**/*.html',
          '.tmp/styles/**/*.css',
          '.tmp/scripts/**/*.js',
          '<%= config.app %>/images/**/*'
        ]
      },
      coffee: {
        files: ['<%= config.app %>/scripts/**/*.coffee'],
        tasks: ['copy:coffee', 'coffee:dist']
      },
      typescript: {
        files: ['<%= config.app %>/scripts/**/*.ts'],
        tasks: ['copy:typescript', 'typescript']
      },
      assemble: {
        files: ['<%= config.app %>/templates/layouts/*.hbs',
          '<%= config.app %>/templates/pages/*.hbs',
          '<%= config.app %>/templates/partials/*.hbs'],
        tasks: ['assemble:server']
      },
      less: {
        files: ['<%= config.app %>/styles/**/*.less', '<%= config.app %>/startup/**/*.less'],
        tasks: ['less:server', 'autoprefixer']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // Change this to 'localhost' to deny access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= config.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= config.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= config.dist %>',
          livereload: false
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/scripts/**/*.js',
        '!<%= config.app %>/scripts/vendor/*',
        'test/spec/**/*.js'
      ]
    },

    // Mocha testing framework configuration options
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
        }
      }
    },

    // Compiles LESS to CSS and generates necessary files if requested
    less: {
      options: {
        paths: ['./bower_components']
      },
      dist: {
        options: {
          cleancss: true,
          report: 'gzip'
        },
        files: [{
          expand: true,
          cwd: '<%= config.app %>/styles',
          src: '**/*.less',
          dest: '.tmp/styles',
          ext: '.css'
        }]
      },
      server: {
        options: {
          sourceMap: true,
          sourceMapBasepath: '<%= config.app %>/',
          sourceMapRootpath: '../'
        },
        files: [{
          expand: true,
          cwd: '<%= config.app %>/styles',
          src: '**/*.less',
          dest: '.tmp/styles',
          ext: '.css'
        }]
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= config.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= config.app %>/images',
        javascriptsDir: '<%= config.app %>/scripts',
        fontsDir: '<%= config.app %>/fonts',
        importPath: '<%= config.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/fonts',
        relativeAssets: false,
        assetCacheBuster: false
      },
      dist: {
        options: {
          generatedImagesDir: '<%= config.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '**/*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // Automatically inject Bower components into the HTML file
    bowerInstall: {
      app: {
        src: ['<%= config.app %>/templates/layouts/layout.hbs'],
        ignorePath: '<%= config.app %>/',
        exclude: ['<%= config.app %>/bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap.js']
      },
      sass: {
        src: ['<%= config.app %>/styles/**/*.{scss,sass}'],
        ignorePath: '<%= config.app %>/bower_components/'
      },
      less: {
        src: ['<%= config.app %>/styles/**/*.less'],
        ignorePath: '<%= config.app %>/bower_components/'
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= config.dist %>/scripts/**/*.js',
            '<%= config.dist %>/styles/**/*.css',
            // '<%= config.dist %>/images/**/*.*',
            // '<%= config.dist %>/fonts/**/*.*',
            // '<%= config.dist %>/*.{ico,png}'
          ]
        }
      }
    },

    cssmin: {
      generated: {
        options: {
          keepSpecialComments: 0
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: '.tmp/index.html'
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
      },
      html: ['<%= config.dist %>/**/*.html'],
      css: ['<%= config.dist %>/styles/**/*.css']
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '**/*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/images',
          src: '**/*.svg',
          dest: '<%= config.dist %>/images'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          // conservativeCollapse: true --> mindestens ein Leerzeichen bleibt erhalten
          conservativeCollapse: false,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: '**/*.html',
          dest: '<%= config.dist %>'
        }]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //     dist: {
    //         files: {
    //             '<%= config.dist %>/styles/main.css': [
    //                 '.tmp/styles/**/*.css',
    //                 '<%= config.app %>/styles/**/*.css'
    //             ]
    //         }
    //     }
    // },
    // uglify: {
    //     dist: {
    //         files: {
    //             '<%= config.dist %>/scripts/scripts.js': [
    //                 '<%= config.dist %>/scripts/scripts.js'
    //             ]
    //         }
    //     }
    // },
    // concat: {
    //     dist: {}
    // },

    // Copies remaining files to places other tasks can use
    copy: {
      coffee: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>/scripts',
          dest: '.tmp/scripts',
          src: '**/*.coffee'
        }]
      },
      typescript: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>/scripts',
          dest: '.tmp/scripts',
          src: '**/*.ts'
        }]
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt,xml}',
            '.htaccess',
            'images/**/*.{ico,webp}',
            '**/*.{html,php}',
            '!bower_components/**/*.{html,php}',
            'fonts/**/*.*',
            'vendors/**/*',
            'bower_components/**/*.*',
            'downloads/**/*.*'
          ]
        }]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= config.app %>/styles',
        dest: '.tmp/styles/',
        src: '**/*.css'
      }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'copy:coffee',
        'coffee:dist',
        'copy:typescript',
        'typescript',
        'compass:server',
        'copy:styles',
        'assemble',
        'less:server',
      ],
      test: [
        'copy:coffee',
        'coffee',
        'copy:typescript',
        'typescript',
        'copy:styles',
        'assemble'
      ],
      dist: [
        'copy:coffee',
        'coffee',
        'copy:typescript',
        'typescript',
        'compass',
        'copy:styles',
        'assemble',
        'less:dist',
        'imagemin',
        'svgmin'
      ]
    }
  });


  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('test', function (target) {
    if (target !== 'watch') {
      grunt.task.run([
        'clean:server',
        'concurrent:test',
        'autoprefixer'
      ]);
    }

    grunt.task.run([
      'connect:test',
      'mocha'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'concurrent:dist',
    'useminPrepare',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'rev',
    'usemin',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    // 'newer:jshint',
    // 'test',
    'build'
  ]);
};
