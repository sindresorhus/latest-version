export type Options = {
	/**
	A semver range or [dist-tag](https://docs.npmjs.com/cli/dist-tag).
	*/
	readonly version?: string;
	/**
	The registry URL is by default inferred from the npm defaults and `.npmrc`. This is beneficial as `package-json` and any project using it will work just like npm. This option is*only** intended for internal tools. You should __not__ use this option in reusable packages. Prefer just using `.npmrc` whenever possible.
	*/
	readonly registryUrl?: string;
};

/**
Get the latest version of an npm package.

@example
```
import latestVersion from 'latest-version';

console.log(await latestVersion('ava'));
//=> '0.18.0'

console.log(await latestVersion('@sindresorhus/df'));
//=> '1.0.1'

// Also works with semver ranges and dist-tags
console.log(await latestVersion('npm', {version: 'latest-5'}));
//=> '5.5.1'
```
*/
export default function latestVersion(packageName: string, options?: Options): Promise<string>;
