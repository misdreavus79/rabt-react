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
				files: ['src/*.js', 'Gruntfile.js'],
				tasks: ['browserify']
			},
			sass: {
      			files: ['src/css/**/*.scss'],
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
						'Title': './src/Title.js',
						'Supporting': './src/Supporting.js',
						'Locations': './src/Locations.js',
						'States': './src/States.js',
						'Store': './src/Store.js',
						'CallToAction': './src/CallToAction.js',
						'Primary': './src/Primary.js'
					},
					browserifyOptions: {
						standalone: 'test'
					}
				},        
				src: ['src/Main.js'],
				dest: 'start.js',
			}
		},
		uglify: {
			// options: {
			// 	banner: '<%= banner %>\n'
			// },
			dist: {
				src: 'start.js',
				dest: 'start.min.js'
			}
		},
		sass: {
			dist: {
				files: {
					'style.css': 'src/css/style.scss'
				}
			}
		},
		cssmin: {
			compress: {
				// options: {
				// 	banner: '<%= banner %>'
				// },
				files: {
					'style.min.css': ['style.css']
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
