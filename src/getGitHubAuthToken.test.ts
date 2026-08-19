import { beforeEach, describe, expect, it, vi } from "vitest";

import { getGitHubAuthToken } from "./getGitHubAuthToken.js";

const mockExec = vi.fn();

vi.mock("node:util", () => ({
	get promisify() {
		return () => mockExec;
	},
}));

describe("getGitHubAuthToken", () => {
	beforeEach(() => {
		process.env.GH_TOKEN = "";
		process.env.GITHUB_TOKEN = "";
	});

	it("returns GH_TOKEN when it exists and is truthy", async () => {
		const GH_TOKEN = "gho_abc123";

		process.env.GH_TOKEN = GH_TOKEN;

		const actual = await getGitHubAuthToken();

		expect(actual).toEqual({ succeeded: true, token: GH_TOKEN });
		expect(mockExec).not.toHaveBeenCalled();
	});

	it("returns GITHUB_TOKEN when it exists and is truthy and GH_TOKEN is not", async () => {
		const GITHUB_TOKEN = "gho_abc123";

		process.env.GITHUB_TOKEN = GITHUB_TOKEN;

		const actual = await getGitHubAuthToken();

		expect(actual).toEqual({ succeeded: true, token: GITHUB_TOKEN });
		expect(mockExec).not.toHaveBeenCalled();
	});

	it("returns GH_TOKEN when both it and GITHUB_TOKEN exist and are truthy", async () => {
		const GH_TOKEN = "gho_abc123";

		process.env.GH_TOKEN = GH_TOKEN;
		process.env.GITHUB_TOKEN = "gho_def456";

		const actual = await getGitHubAuthToken();

		expect(actual).toEqual({ succeeded: true, token: GH_TOKEN });
		expect(mockExec).not.toHaveBeenCalled();
	});

	it("returns the token when gh auth token prints a token", async () => {
		const stdout = "gho_abc123";

		mockExec.mockResolvedValue({ stdout });

		const actual = await getGitHubAuthToken();

		expect(actual).toEqual({ succeeded: true, token: stdout });
	});

	it("returns the gh error when gh auth token and gh resolve with errors", async () => {
		const stderr = "Oh no!";

		mockExec.mockResolvedValueOnce({ stderr: "auth token issue" });
		mockExec.mockResolvedValueOnce({ stderr });

		const actual = await getGitHubAuthToken();

		expect(actual).toEqual({
			error: `Could not run \`gh\`: ${stderr}`,
			succeeded: false,
		});
	});

	it("returns the gh auth token error when only gh auth token resolves with an error", async () => {
		const stderr = "Oh no!";

		mockExec.mockResolvedValueOnce({ stderr });
		mockExec.mockResolvedValueOnce({ stdout: "" });

		const actual = await getGitHubAuthToken();

		expect(actual).toEqual({
			error: stderr,
			succeeded: false,
		});
	});

	it("returns undefined when both gh and gh auth token resolve with nothing", async () => {
		mockExec.mockResolvedValueOnce({ stderr: "", stdout: "" });
		mockExec.mockResolvedValueOnce({ stderr: "", stdout: "" });

		const actual = await getGitHubAuthToken();

		expect(actual).toEqual({
			error: undefined,
			succeeded: false,
		});
	});

	it("returns undefined when both gh and gh auth token reject with errors", async () => {
		mockExec.mockRejectedValueOnce(new Error("Oh no! (1)"));
		mockExec.mockRejectedValueOnce(new Error("Oh no! (2)"));

		const actual = await getGitHubAuthToken();

		expect(actual).toEqual({
			error: "Could not run `gh`: Error: Oh no! (2)",
			succeeded: false,
		});
	});
});
