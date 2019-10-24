/// <reference types="node"/>
import {Agent as HttpAgent} from 'http';
import {Agent as HttpsAgent} from 'https';

declare namespace latestVersion {
	interface Agents {
		http?: HttpAgent;
		https?: HttpsAgent;
	}

	interface Options {
		/**
		A semver range or [dist-tag](https://docs.npmjs.com/cli/dist-tag).
		*/
		readonly version?: string;
		/**
		The registry URL is by default inferred from the npm defaults and `.npmrc`. This is beneficial as `package-json` and any project using it will work just like npm. This option is*only** intended for internal tools. You should*not** use this option in reusable packages. Prefer just using `.npmrc` whenever possible.
		*/
		readonly registryUrl?: string;
		/**
		Overwrite the `agent` option that is passed down to [`got`](https://github.com/sindresorhus/got#agent). This might be useful to add [proxy support](https://github.com/sindresorhus/got#proxies).
		*/
		readonly agent?: HttpAgent | HttpsAgent | Agents | false;
	}
}

declare const latestVersion: {
	/**
	Get the latest version of an npm package.

	@example
	```
	import latestVersion = require('latest-version');

	(async () => {
		console.log(await latestVersion('ava'));
		//=> '0.18.0'

		console.log(await latestVersion('@sindresorhus/df'));
		//=> '1.0.1'

		// Also works with semver ranges and dist-tags
		console.log(await latestVersion('npm', {version: 'latest-5'}));
		//=> '5.5.1'
	})();
	```
	*/
	(packageName: string, options?: latestVersion.Options): Promise<string>;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function latestVersion(
	// 	packageName: string,
	// 	options?: latestVersion.Options
	// ): Promise<string>;
	// export = latestVersion;
	default: typeof latestVersion;
};

export = latestVersion;
