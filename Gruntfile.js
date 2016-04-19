module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			html: {
				files: ['*.html', 'app.js'],
				options: {
					livereload: 35729
				}				
			},
			babel: {
				files: ['src/app.js'],
				tasks: ['babel:dist']
			},
			browserify: {
				files: ['app.js'],
				tasks: ['browserify']
			}
		},
		babel: {
			options: {
				sourceMap: true,
				plugins: [
					'transform-react-jsx',
				],
    			presets: ['es2015', 'react']
			},
			dist: {
				files: {
					"app.js": ["src/app.js", "src/ContactsList.js"]
				}
			}
		},
		browserify: {
			options: {
				alias: {
					'ContactsList': './src/ContactsList.js'
				}
			},
			dist: {
				files: {
					'app2.js': 'app.js'
				}
			}
			
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['watch']);
};
