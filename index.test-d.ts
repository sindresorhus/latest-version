import {expectType} from 'tsd-check';
import latestVersion from '.';

expectType<Promise<string>>(latestVersion('ava'));
expectType<Promise<string>>(latestVersion('npm', {version: 'latest-5'}));
