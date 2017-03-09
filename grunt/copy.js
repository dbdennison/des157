module.exports = {

  cname: {
	files: [
		{expand: true, cwd: './', src: ['CNAME'], dest: 'docs'},
	]
  },
  studio1: {
	files: [
		{expand: true, cwd: 'src/studio1', src: ['**'], dest: 'docs'},
	]
  },
  main: {
	files: [
		{expand: true, cwd: 'src', src: ['**', '!layout/**'], dest: 'docs'},
	]
  }

};