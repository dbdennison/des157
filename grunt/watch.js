module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    css: {
        files: [
            'src/**/*.css'
        ],
		tasks: [
            'dev'
        ]
    },
	
	html: {
        files: [
            'src/**/*.html'
        ],
		tasks: [
            'dev'
        ]
    },
	script: {
        files: [
            'src/**/*.js'
        ],
		tasks: [
            'dev'
        ]
    },
};
