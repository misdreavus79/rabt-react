module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			html: {
				files: ['*.html', 'start.js', 'style.css'],
				options: {
					livereload: 35729
				}				
			},
			browserify: {
				files: ['dev/*.js', 'Gruntfile.js'],
				tasks: ['browserify']
			},
			sass: {
      			files: ['dev/css/**/*.scss'],
      			tasks: ['sass'],
      		}
		},
		browserify: {
			dist: {
				options: {
					transform: [
						[
							'babelify', 
							{
								presets: ['es2015', 'react']
							}
						]
					],
					alias: {
						'Title': './dev/js/components/home/Title.js',
						'Supporting': './dev/js/components/home/Supporting.js',
						'Locations': './dev/js/components/home/Locations.js',
						'States': './dev/js/components/home/States.js',
						'Store': './dev/js/components/home/Store.js',
						'CallToAction': './dev/js/components/home/CallToAction.js',
						'Primary': './dev/js/components/home/Primary.js'
					},
					browserifyOptions: {
						standalone: 'registry'
					}
				},        
				dev: ['dev/js/components/**/Main.js'],
				dest: 'dev/js/start.js',
			}
		},
		uglify: {
			// options: {
			// 	banner: '<%= banner %>\n'
			// },
			dist: {
				dev: 'start.js',
				dest: 'start.min.js'
			}
		},
		sass: {
			dist: {
				files: {
					'dev/css/style.css': 'dev/css/style.scss'
				}
			}
		},
		cssmin: {
			compress: {
				// options: {
				// 	banner: '<%= banner %>'
				// },
				files: {
					'assets/css/style.min.css': ['dev/css/style.css']
				}
			}
		},
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 3
				},
				files: {
					//'destination': 'source'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['watch']);
};
