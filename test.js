import test from 'ava';
import semver from 'semver';
import semverRegex from 'semver-regex';
import latestVersion, {PackageNotFoundError, VersionNotFoundError} from './index.js';

test('latest version', async t => {
	t.regex(await latestVersion('ava'), semverRegex());
});

test('latest version with version', async t => {
	t.true(semver.satisfies(await latestVersion('package-json', {version: '0'}), '0.x'));
});

test('latest version with dist-tag', async t => {
	t.true(semver.satisfies(await latestVersion('npm', {version: 'latest-5'}), '5.x'));
});

test('latest version scoped', async t => {
	t.regex(await latestVersion('@sindresorhus/df'), semverRegex());
});

test('registry url', async t => {
	t.regex(await latestVersion('npm', {registryUrl: 'https://registry.yarnpkg.com/'}), semverRegex());
});

test('include deprecated', async t => {
	t.regex(await latestVersion('querystring', {version: '0.2', omitDeprecated: false}), semverRegex());
});

test('throws if not found', async t => {
	await t.throwsAsync(latestVersion('nnnope'), {instanceOf: PackageNotFoundError});
	await t.throwsAsync(latestVersion('npm', {version: '0.0.0'}), {instanceOf: VersionNotFoundError});
});
