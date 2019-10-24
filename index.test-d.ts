import {expectType} from 'tsd';
import latestVersion = require('.');

expectType<Promise<string>>(latestVersion('ava'));
expectType<Promise<string>>(latestVersion('npm', {version: 'latest-5'}));
expectType<Promise<string>>(latestVersion('npm', {
	registryUrl: 'http://example.com/npm',
	agent: false
}));
