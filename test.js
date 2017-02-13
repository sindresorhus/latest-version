import test from 'ava';
import semverRegex from 'semver-regex';
import m from '.';

test('latest version', async t => {
	t.regex(await m('ava'), semverRegex());
});

test('latest version scoped', async t => {
	t.regex(await m('@sindresorhus/df'), semverRegex());
});
