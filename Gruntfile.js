module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			html: {
				files: ['*.html', 'start.js'],
				options: {
					livereload: 35729
				}				
			},
			browserify: {
				files: ['src/*.js'],
				tasks: ['browserify']
			}
		},
		browserify: {
			dist: {
				options: {
					transform: [
						[
							'babelify', 
							{
								presets: ['es2015', 'react'], 
								plugins: ['transform-react-jsx']
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
					}
				},        
				src: ['src/Main.js'],
				dest: 'start.js',
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['watch']);
};
