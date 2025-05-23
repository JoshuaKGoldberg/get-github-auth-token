<h1 align="center">get-github-auth-token</h1>

<p align="center">
	Retrieves the running user's GitHub authentication token.
	🪙
</p>

<p align="center">
	<!-- prettier-ignore-start -->
	<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
	<a href="#contributors" target="_blank"><img alt="👪 All Contributors: 2" src="https://img.shields.io/badge/%F0%9F%91%AA_all_contributors-2-21bb42.svg" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
	<!-- prettier-ignore-end -->
	<a href="https://github.com/JoshuaKGoldberg/get-github-auth-token/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://codecov.io/gh/JoshuaKGoldberg/get-github-auth-token" target="_blank"><img alt="🧪 Coverage" src="https://img.shields.io/codecov/c/github/JoshuaKGoldberg/get-github-auth-token?label=%F0%9F%A7%AA%20coverage" /></a>
	<a href="https://github.com/JoshuaKGoldberg/get-github-auth-token/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg" /></a>
	<a href="http://npmjs.com/package/get-github-auth-token" target="_blank"><img alt="📦 npm version" src="https://img.shields.io/npm/v/get-github-auth-token?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i get-github-auth-token
```

```ts
import { getGitHubAuthToken } from "get-github-auth-token";

const auth = await getGitHubAuthToken("Hello, world! 💖");

if (auth.succeeded) {
	console.log("Token:", auth.token);
} else {
	console.error("Oh no:", auth.error);
}
```

`getGitHubAuthToken` attempts to find a GitHub auth token from the following places, in order:

1. `process.env.GH_TOKEN`
2. Executing `gh auth token` as a child process

> 💡 Using this to create a new [Octokit](https://octokit.github.io/rest.js) instance?
> See [JoshuaKGoldberg/octokit-from-auth](https://github.com/JoshuaKGoldberg/octokit-from-auth).

## Development

See [`.github/CONTRIBUTING.md`](./.github/CONTRIBUTING.md), then [`.github/DEVELOPMENT.md`](./.github/DEVELOPMENT.md).
Thanks! 🪙

## Contributors

<!-- spellchecker: disable -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center"><a href="http://www.joshuakgoldberg.com/"><img src="https://avatars.githubusercontent.com/u/3335181?v=4?s=100" width="100px;" alt="Josh Goldberg ✨"/><br /><sub><b>Josh Goldberg ✨</b></sub></a><br /><a href="https://github.com/JoshuaKGoldberg/get-github-auth-token/commits?author=JoshuaKGoldberg" title="Code">💻</a> <a href="#content-JoshuaKGoldberg" title="Content">🖋</a> <a href="https://github.com/JoshuaKGoldberg/get-github-auth-token/commits?author=JoshuaKGoldberg" title="Documentation">📖</a> <a href="#ideas-JoshuaKGoldberg" title="Ideas, Planning, & Feedback">🤔</a> <a href="#infra-JoshuaKGoldberg" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JoshuaKGoldberg" title="Maintenance">🚧</a> <a href="#projectManagement-JoshuaKGoldberg" title="Project Management">📆</a> <a href="#tool-JoshuaKGoldberg" title="Tools">🔧</a> <a href="https://github.com/JoshuaKGoldberg/get-github-auth-token/issues?q=author%3AJoshuaKGoldberg" title="Bug reports">🐛</a></td>
      <td align="center"><a href="https://uncenter.dev"><img src="https://avatars.githubusercontent.com/u/47499684?v=4?s=100" width="100px;" alt="uncenter"/><br /><sub><b>uncenter</b></sub></a><br /><a href="#ideas-uncenter" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- spellchecker: enable -->

> 💝 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app) using the [Bingo framework](https://create.bingo).
