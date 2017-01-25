module.exports = {

  cname: {
	files: [
		{expand: true, cwd: './', src: ['CNAME'], dest: 'dist'},
	]
  },
  studio1: {
	files: [
		{expand: true, cwd: 'src/studio1', src: ['**'], dest: 'dist'},
	]
  },
  main: {
	files: [
		{expand: true, cwd: 'src', src: ['**', '!layout/**'], dest: 'dist'},
	]
  }

};