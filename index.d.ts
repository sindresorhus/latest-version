declare namespace latestVersion {
	interface Options {
		/**
		A semver range or [dist-tag](https://docs.npmjs.com/cli/dist-tag).
		*/
		readonly version?: string;
		/**
		Whether to normalize the name according to the latest npm rules.
		New packages are not allowed to use mixed casing, therefore by default package converts the name to lowercase.
		Set to false if the normalization should be skipped.
		*/
		readonly normalizeName?: boolean;
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

		// It is possible to skip avoid using lowercase names by using options
		console.log(await latestVersion('ngVue', {normalizeName: false}));
		//=> '1.7.8'
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
