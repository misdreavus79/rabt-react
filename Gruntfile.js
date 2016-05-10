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
						'Contact': './src/Contact.js',
						'ContactsList': './src/ContactsList',
						'Events': './src/Events.js',
						'Header': './src/Head3er.js'
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
