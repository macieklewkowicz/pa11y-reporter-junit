'use strict';

const builder = require('junit-report-builder');

const report = module.exports = {};

// Pa11y version support
report.supports = '^6.0 || ^5.0.0 || ^5.0.0-alpha || ^5.0.0-beta';


// Output formatted results
report.results = results => {
	// Create a test suite
	const suite = builder.testSuite().name(results.pageUrl);

	results.issues.forEach(issue => {
		suite.testCase()
			.className(issue.code)
			.name(`[${results.pageUrl}] ${issue.selector}`)
			.failure(`${issue.message}\n\nContext: ${issue.context}`);
	});
	return builder.build();
};

// Output error messages
report.error = message => {
	return message;
};
