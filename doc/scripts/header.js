const domReady = function (callback) {
	const state = document.readyState;
	if ( state === 'interactive' || state === 'complete' ) {
		callback();
	}
	else {
		document.addEventListener('DOMContentLoaded', callback);
	}
};


domReady(function () {
	const projectname = document.createElement('a');
	projectname.classList.add('project-name');
	projectname.text = 'aureooms/js-count-min-sketch';
	projectname.href = './index.html';

	const header = document.getElementsByTagName('header')[0];
	header.insertBefore(projectname,header.firstChild);

	const testlink = document.querySelector('header > a[data-ice="testLink"]');
	testlink.href = 'https://coveralls.io/github/aureooms/js-count-min-sketch';
	testlink.target = '_BLANK';

	const searchBox = document.querySelector('.search-box');
	const input = document.querySelector('.search-input');

	// active search box when focus on searchBox.
	input.addEventListener('focus', function () {
		searchBox.classList.add('active');
	});
});
