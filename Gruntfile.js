module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			html: {
				files: ['*.html', 'dev/js/start.js', 'dev/css/style.css'],
				options: {
					livereload: 35729
				}				
			},
			browserify: {
				files: ['dev/js/components/desktop/**/*.jsx', 'Gruntfile.js'],
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
						'Title': './dev/js/components/desktop/home/Title.jsx',
						'Supporting': './dev/js/components/desktop/home/Supporting.jsx',
						'Locations': './dev/js/components/desktop/home/Locations.jsx',
						'States': './dev/js/components/desktop/home/States.jsx',
						'Store': './dev/js/components/desktop/home/Store.jsx',
						'CallToAction': './dev/js/components/desktop/home/CallToAction.jsx',
						'Primary': './dev/js/components/desktop/home/Primary.jsx',
						'CTA': './dev/js/components/desktop/confirm/CTA.jsx',
						'GoodBye': './dev/js/components/desktop/confirm/GoodBye.jsx',
						'Ads': './dev/js/components/desktop/confirm/Ads.jsx'
					},
					browserifyOptions: {
						standalone: 'registry'
					}
				},        
				src: ['dev/js/components/**/**/Main.jsx'],
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
