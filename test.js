import test from 'ava';
import m from './';

const reVersion = /\d+\.\d+\.\d+/;

test('latest version', async t => {
	t.regex(await m('ava'), reVersion);
});

test('latest version scoped', async t => {
	t.regex(await m('@sindresorhus/df'), reVersion);
});
