import {expectType} from 'tsd';
import latestVersion = require('.');

expectType<Promise<string>>(latestVersion('ava'));
expectType<Promise<string>>(latestVersion('npm', {version: 'latest-5'}));
