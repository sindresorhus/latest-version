import {expectType} from 'tsd';
import latestVersion from './index.js';

expectType<Promise<string>>(latestVersion('ava'));
expectType<Promise<string>>(latestVersion('npm', {version: 'latest-5'}));
expectType<Promise<string>>(latestVersion('npm', {registryUrl: 'https://registry.yarnpkg.com'}));
expectType<Promise<string>>(latestVersion('npm', {omitDeprecated: false}));
