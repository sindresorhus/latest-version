export interface Options {
	/**
	 * A dist-tag or a semver range.
	 */
	readonly version?: string;
}

/**
 * Get the latest version of an npm package.
 *
 * @param name - The package name to look up the version for.
 */
export default function latestVersion(
	name: string,
	options?: Options
): Promise<string>;
