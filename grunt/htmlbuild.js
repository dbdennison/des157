module.exports = {
	dist: {
		src: ['docs/**/*.html'],
		dest: 'docs/',
			options: {
				beautify: true,
				relative: true,
				basePath: 'docs/',
				sections: {
					layout: {
							siteheader: 'src/layout/portal-header.html',
							sitefooter: 'src/layout/portal-footer.html',
							sitehead: 'src/layout/portal-head.html',
						}
				},
				data: {
					// Data to pass to templates
					version: "0.1.0",
					title: "test",
				},
			}
	}
}