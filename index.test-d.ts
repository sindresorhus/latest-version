import {expectType} from 'tsd';
import latestVersion from './index.js';

expectType<Promise<string>>(latestVersion('ava'));
expectType<Promise<string>>(latestVersion('npm', {version: 'latest-5'}));
