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
				files: ['react/app.js'],
				tasks: ['babel:dist']
			}
		},
		babel: {
			options: {
				sourceMap: false,
				plugins: ['transform-react-jsx'],
    			presets: ['es2015', 'react']
			},
			dist: {
				files: {
					"app.js": "react/app.js"
				}
			},
			jsx: {
				files: [{
					expand: true,
					cwd: 'source/js/jsx/', // Custom folder
					src: ['*.jsx'],
					dest: 'source/js/jsx-compiled/', // Custom folder
					ext: '.js'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-babel');
	//grunt.registerTask('babel', ['babel']);
	grunt.registerTask('default', ['watch']);
};
