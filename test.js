import test from 'ava';
import fn from './';

const reVersion = /\d+\.\d+\.\d+/;

test('latest version', async t => {
	t.regexTest(reVersion, await fn('ava'));
});

test('latest version scoped', async t => {
	t.regexTest(reVersion, await fn('@sindresorhus/df'));
});
