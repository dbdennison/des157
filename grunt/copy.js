module.exports = {

  main: {
	files: [
		{expand: true, cwd: 'src', src: ['**'], dest: 'dist'},
		{expand: true, cwd: 'src/studio1', src: ['**'], dest: 'dist'},
		{expand: true, cwd: './', src: ['CNAME'], dest: 'dist'},
	]
  }

};