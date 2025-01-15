import * as cp from "node:child_process";
import * as util from "node:util";

import { GitHubAuthToken } from "./types.js";

export async function getGitHubAuthToken(): Promise<GitHubAuthToken> {
	if (process.env.GH_TOKEN) {
		return { succeeded: true, token: process.env.GH_TOKEN };
	}

	const exec = util.promisify(cp.exec);
	const token = await exec("gh auth token").catch(
		(): Record<string, string | undefined> => ({}),
	);

	if (token.stdout) {
		return { succeeded: true, token: token.stdout };
	}

	const help = await exec("gh").catch((error) => ({ stderr: error }));

	return {
		error:
			(help.stderr && `Could not run \`gh\`: ${help.stderr}`) ||
			token.stderr ||
			undefined,
		succeeded: false,
	};
}
