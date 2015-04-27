/**
 * @file Gruntfile.js
 * 
 * Pre-requisite:
 * 
 * 1. Install a recent version of npm (works with npm 1.4.28) 2. Install
 * required npm packages with `npm install`
 * 
 * Tasks:
 * 
 * ./grunt extract-i18n-strings Extract all translatable strings from the
 * application
 * 
 * ./grunt dev Build the current sources
 * 
 * ./grunt live Build the current sources, open a browser and watch for
 * modifications. When a modification is detected, the browser is reloaded.
 * 
 * ./grunt run-tests Run all tests as defined in the *.spec.js files. Run the
 * tests once and exit.
 * 
 * ./grunt run-tests-live Run all tests as defined in the *.spec.js files. Watch
 * for modifications. If a modification is detected, re-run all tests.
 * 
 * ./grunt package Create a package for production deployment.
 * 
 */

'use strict';

module.exports = function(grunt) {

	// load all deps
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt
			.initConfig({

				// load package information
				pkg : grunt.file.readJSON('package.json'),

				// additional general information
				project : {
					buildtarget : 'src/'
				},

				// env
				env : {
					dev : {
						NODE_ENV : 'DEVELOPMENT'
					},
					prod : {
						NODE_ENV : 'PRODUCTION'
					}
				},

				// preprocess
				preprocess : {
					dev : {
						src : './src/index.tpl.html',
						dest : './src/index.html'
					},
					prod : {
						src : './src/index.tpl.html',
						dest : '<%= project.buildtarget %>/index.html',
						options : {
							context : {
								name : '<%= pkg.name %>',
								version : '<%= pkg.version %>',
								now : '<%= now %>',
								ver : '<%= ver %>'
							}
						}
					}
				},

				// clean
				clean : {
					build : {
						src : [ '<%= project.buildtarget %>' ]
					},
					sassfrombuild : {
						src : [ '<%= project.buildtarget %>/scss/' ]
					},
					contribfrombuild : {
						src : [ '<%= project.buildtarget %>/contrib/' ]
					},
					useless : {
						src : [ '<%= project.buildtarget %>/**/*mock*',
								'<%= project.buildtarget %>/**/*spec*',
								'<%= project.buildtarget %>/resources',
								'<%= project.buildtarget %>/app/focus.js',
								'<%= project.buildtarget %>/index.tpl.html' ]
					},
					pristine : {
						src : [ 'node_modules/', 'src/contrib/', '.sass-cache/',
								'src/index.html' ]
					}
				},

				// copy files to target build/dev directories
				copy : {
					all : {
						files : [ {
							expand : true,
							cwd : 'src/',
							src : '**',
							dest : '<%= project.buildtarget %>/'
						} ]
					}
				},

				// bowercopy to final destination
				bowercopy : {
					options : {
						srcPrefix : 'src/contrib/',
						destPrefix : '<%= project.buildtarget %>/contrib/'
					},
					files : {
						files : {// dest: src
							// jquery
							'jquery/dist/jquery.min.js' : 'jquery/dist/jquery.min.js',
							// sidr
							'sidr/jquery.sidr.min.js' : 'sidr/jquery.sidr.min.js',
							// fontawesome
							'fontawesome/css/font-awesome.min.css' : 'fontawesome/css/font-awesome.min.css',
							'fontawesome/fonts/FontAwesome.otf' : 'fontawesome/fonts/FontAwesome.otf',
							'fontawesome/fonts/fontawesome-webfont.svg' : 'fontawesome/fonts/fontawesome-webfont.svg',
							'fontawesome/fonts/fontawesome-webfont.woff' : 'fontawesome/fonts/fontawesome-webfont.woff',
							'fontawesome/fonts/fontawesome-webfont.eot' : 'fontawesome/fonts/fontawesome-webfont.eot',
							'fontawesome/fonts/fontawesome-webfont.ttf' : 'fontawesome/fonts/fontawesome-webfont.ttf',
							// bootstrap (without js)
							'bootstrap/css/bootstrap.min.css' : 'bootstrap/dist/css/bootstrap.min.css',
							'bootstrap/css/bootstrap-theme.min.css' : 'bootstrap/dist/css/bootstrap-theme.min.css',
							'bootstrap/fonts/glyphicons-halflings-regular.eot' : 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
							'bootstrap/fonts/glyphicons-halflings-regular.ttf' : 'bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
							'bootstrap/fonts/glyphicons-halflings-regular.svg' : 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
							'bootstrap/fonts/glyphicons-halflings-regular.woff' : 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
							// angularjs
							'angular/angular.min.js' : 'angular/angular.min.js',
							// angular-gettext
							'angular-gettext/dist/angular-gettext.min.js' : 'angular-gettext/dist/angular-gettext.min.js',
							// angular-route
							'angular-route/angular-route.min.js' : 'angular-route/angular-route.min.js',
							// angular-bootstrap
							'angular-bootstrap/ui-bootstrap.min.js' : 'angular-bootstrap/ui-bootstrap.min.js',
							'angular-bootstrap/ui-bootstrap-tpls.min.js' : 'angular-bootstrap/ui-bootstrap-tpls.min.js',
							// leaflet
							'leaflet/dist/images/' : 'leaflet/dist/images/',
							'leaflet/dist/leaflet.css' : 'leaflet/dist/leaflet.css',
							'leaflet/dist/leaflet.js' : 'leaflet/dist/leaflet.js',
							// angular-leaflet-directive
							'angular-leaflet-directive/dist/angular-leaflet-directive.min.js' : 'angular-leaflet-directive/dist/angular-leaflet-directive.min.js',
							// float
							'src/contrib/flot/' : 'flot/jquery.flot.*',
							// angular-flot
							'angular-flot/angular-flot.js' : 'angular-flot/angular-flot.js'
						}
					}
				},

				// sass processing
				sass : {
					all : {
						options : {
							style : 'compressed'
						},
						files : [ {
							expand : true,
							cwd : 'src/scss/',
							src : [ '*.scss' ],
							dest : '<%= project.buildtarget %>/css/',
							ext : '.css'
						} ]
					}
				},

				// replace strings
				replace : {
					all : {
						options : {
							patterns : [
									{
										// first process the source header, that may contain other
										// below pattern matches
										match : 'source_header',
										replacement : '<%= grunt.file.read( "resources/documentation/source-header.txt") %>'
									}, {
										match : 'timestamp',
										replacement : '<%= new Date().getTime() %>'
									}, {
										match : 'human_date',
										replacement : '<%= grunt.template.today() %>'
									}, {
										match : 'pkg_name',
										replacement : '<%= pkg.name %>'
									}, {
										match : 'pkg_version',
										replacement : '<%= pkg.version %>'
									}

							]
						},
						files : [ {
							expand : true,
							cwd : '<%= project.buildtarget %>/',
							src : [ 'index.html', 'app/**/*.html', 'app/**/*.js' ],
							dest : '<%= project.buildtarget %>/'
						} ]
					}
				},

				// watch
				watch : {
					index : {
						files : [ 'src/index.tpl.html', 'src/**/*.tpl.html' ],
						tasks : [ 'preprocess:dev' ], // FIXME TODO
						options : {
							livereload : true
						}
					},
					sass : {
						files : 'src/scss/{,*/}*.{scss,sass}',
						tasks : [ 'sass:all' ],
						options : {
							livereload : true
						}
					}
				},

				// run a connect web server
				express : {
					all : {
						options : {
							bases : [ 'src/' ],
							port : 9000,
							hostname : "0.0.0.0",
							livereload : true
						}
					}
				},

				// Open the target URL
				open : {
					firefox : {
						path : 'http://localhost:<%= express.all.options.port %>',
						app : 'firefox'
					}
				},

				// run tests continuously
				karma : {
					singlerun : {
						configFile : 'karma.conf.js'
					},
					liverun : {
						configFile : 'karma.conf.js',
						singleRun : false
					}
				},

				// protractor
				protractor : {
					options : {
						configFile : "protractor.conf.js"
					},
					all : {}
				},

				// extract gettext strings
				nggettext_extract : {
					pot : {
						files : {
							'po/template.pot' : [ 'src/index.tpl.html', 'src/**/*.tpl.html' ]
						}
					},
				},

				// compile translations
				nggettext_compile : {
					all : {
						files : {
							'src/app/translations.js' : [ 'po/*.po' ]
						}
					},
				},

				// uglify
				uglify : {
					options : {
						compress : true,
						mangle : true,
						banner : "/*\n * <%= pkg.longname %> v<%= pkg.version %>\n * \n * <%= grunt.template.today('yyyy-mm-dd') %>\n */\n"
					},
					production : {
						files : {
							'<%= project.buildtarget %>/app/focus.min.js' : [ 'src/app/*.js' ],
							'<%= project.buildtarget %>/app/css/focus.all.css' : [ 'src/app/css/*.css' ]
						}
					}
				}
			});

	// Tasks
	grunt.registerTask('extract-i18n-strings', [ 'nggettext_extract:pot' ]);

	grunt.registerTask('build-dev', [ 'env:dev', 'sass:all',
			'nggettext_compile:all', 'bowercopy', 'preprocess:dev' ]);

	grunt.registerTask('build-package', function() {
		grunt.config.set('project.buildtarget',
				'<%= pkg.name %>-v<%= pkg.version %>/');
		grunt.task.run([ 'env:prod', 'clean:build', 'copy:all', 'sass:all',
				'clean:sassfrombuild', 'nggettext_compile:all', 'replace:all',
				'clean:contribfrombuild', 'bowercopy', 'uglify:production',
				'clean:useless', 'preprocess:prod' ]);
	});

	grunt.registerTask('build-dev-live', [ 'build-dev', 'express',
			'open:firefox', 'watch' ]);

	grunt.registerTask('run-unit-tests', [ 'karma:singlerun' ]);
	grunt.registerTask('run-unit-tests-live', [ 'karma:liverun' ]);

	grunt.registerTask('run-e2e-tests', [ 'build-dev', 'protractor:all' ]);

};
