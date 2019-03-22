'use strict';

const assert = require('proclaim');

describe('lib/reporter', () => {
	let reporter;

	beforeEach(() => {
		reporter = require('../../../lib/reporter');
	});

	it('is an object', () => {
		assert.isObject(reporter);
	});

	it('has a `supports` property', () => {
		assert.isString(reporter.supports);
	});

	it('has a `results` method', () => {
		assert.isFunction(reporter.results);
	});

	describe('.results(pa11yResults)', () => {
		let mockPa11yResults;

		beforeEach(() => {
			mockPa11yResults = {
				documentTitle: 'mock title',
				pageUrl: 'http://mock-url/',
				issues: [
					{
						type: 'mock-type-1',
						code: 'mock-code-1',
						message: 'mock-message-1',
						context: 'mock-context-1',
						selector: 'mock-selector-1'
					},
					{
						type: 'mock-type-2',
						code: 'mock-code-2',
						message: 'mock-message-2',
						context: '<span class="mock-context-2">foo</span>',
						selector: 'complex > mock-selector-2'
					},
					{
						type: 'mock-type, "with bad" characters',
						code: 'mock-code, "with bad" characters',
						message: 'mock-message, "with bad" characters',
						context: 'mock-context, "with bad" characters',
						selector: 'mock-selector, "with bad" characters'
					}
				]
			};
		});

		it('returns a CSV string representing the results', () => {
			assert.strictEqual(reporter.results(mockPa11yResults), `
<?xml version="1.0" encoding="UTF-8"?>
<testsuites>
	<testsuite name="http://mock-url/" tests="3" failures="3" errors="0" skipped="0">
		<testcase classname="mock-code-1" name="[http://mock-url/] mock-selector-1">
			<failure message="mock-message-1&#xA;&#xA;Context: mock-context-1"/>
		</testcase>
		<testcase classname="mock-code-2" name="[http://mock-url/] complex > mock-selector-2">
			<failure message="mock-message-2&#xA;&#xA;Context: &lt;span class=&quot;mock-context-2&quot;>foo&lt;/span>"/>
		</testcase>
		<testcase classname="mock-code, &quot;with bad&quot; characters" name="[http://mock-url/] mock-selector, &quot;with bad&quot; characters">
			<failure message="mock-message, &quot;with bad&quot; characters&#xA;&#xA;Context: mock-context, &quot;with bad&quot; characters"/>
		</testcase>
	</testsuite>
</testsuites>
`.trim().replace(/\t/g, '  '));
		});

	});

	it('has an `error` method', () => {
		assert.isFunction(reporter.error);
	});

	describe('.error(message)', () => {

		it('returns the message unchanged', () => {
			assert.strictEqual(reporter.error('mock message'), 'mock message');
		});

	});

	it('does not have a `begin` method', () => {
		assert.isUndefined(reporter.begin);
	});

	it('does not have a `debug` method', () => {
		assert.isUndefined(reporter.debug);
	});

	it('does not have an `info` method', () => {
		assert.isUndefined(reporter.info);
	});

});
