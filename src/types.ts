export interface GitHubAuthTokenFailure {
	error: string | undefined;
	succeeded: false;
}

export interface GitHubAuthTokenSuccess {
	succeeded: true;
	token: string;
}

export type GitHubAuthToken = GitHubAuthTokenFailure | GitHubAuthTokenSuccess;
