export interface Options {
	/**
	 * A semver range or [dist-tag](https://docs.npmjs.com/cli/dist-tag).
	 */
	readonly version?: string;
}

/**
 * Get the latest version of an npm package.
 */
export default function latestVersion(
	packageName: string,
	options?: Options
): Promise<string>;
