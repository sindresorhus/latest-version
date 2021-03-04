import {PackageNotFoundError} from 'package-json';
import test from 'ava';
import semver from 'semver';
import semverRegex from 'semver-regex';
import latestVersion from '.';

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

test('latest version with mixed casing (normalize: undefined)', async t => {
	const error = await t.throwsAsync(latestVersion('ngVue'));
	t.true(error instanceof PackageNotFoundError);
});

test('latest version with mixed casing (normalize: false)', async t => {
	t.regex(await latestVersion('ngVue', {normalizeName: false}), semverRegex());
});
