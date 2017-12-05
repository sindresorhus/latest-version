import test from 'ava';
import semver from 'semver';
import semverRegex from 'semver-regex';
import m from '.';

test('latest version', async t => {
	t.regex(await m('ava'), semverRegex());
});

test('latest version with version', async t => {
	t.true(semver.satisfies(await m('package-json', '0'), '0.x'));
});

test('latest version with dist-tag', async t => {
	t.true(semver.satisfies(await m('npm', 'latest-5'), '5.x'));
});

test('latest version scoped', async t => {
	t.regex(await m('@sindresorhus/df'), semverRegex());
});
