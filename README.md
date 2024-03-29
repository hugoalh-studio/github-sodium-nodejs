# GitHub Sodium (NodeJS)

[⚖️ MIT](./LICENSE.md)

|  | **Release - Latest** | **Release - Pre** |
|:-:|:-:|:-:|
| [![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=ffffff&style=flat-square "GitHub")](https://github.com/hugoalh-studio/github-sodium-nodejs) | ![GitHub Latest Release Version](https://img.shields.io/github/release/hugoalh-studio/github-sodium-nodejs?sort=semver&label=&style=flat-square "GitHub Latest Release Version") (![GitHub Latest Release Date](https://img.shields.io/github/release-date/hugoalh-studio/github-sodium-nodejs?label=&style=flat-square "GitHub Latest Release Date")) | ![GitHub Latest Pre-Release Version](https://img.shields.io/github/release/hugoalh-studio/github-sodium-nodejs?include_prereleases&sort=semver&label=&style=flat-square "GitHub Latest Pre-Release Version") (![GitHub Latest Pre-Release Date](https://img.shields.io/github/release-date-pre/hugoalh-studio/github-sodium-nodejs?label=&style=flat-square "GitHub Latest Pre-Release Date")) |
| [![NPM](https://img.shields.io/badge/NPM-CB3837?logo=npm&logoColor=ffffff&style=flat-square "NPM")](https://www.npmjs.com/package/@hugoalh/github-sodium) | ![NPM Latest Release Version](https://img.shields.io/npm/v/@hugoalh/github-sodium/latest?label=&style=flat-square "NPM Latest Release Version") | ![NPM Latest Pre-Release Version](https://img.shields.io/npm/v/@hugoalh/github-sodium/pre?label=&style=flat-square "NPM Latest Pre-Release Version") |

A NodeJS module to provide an easier sodium for GitHub secrets.

This project is based on libsodium.js ([GitHub](https://github.com/jedisct1/libsodium.js))([NPM](https://www.npmjs.com/package/libsodium)) with optimization for GitHub secrets.

## 🔰 Begin

### NodeJS

- **Target Version:** >= v16.13.0, &:
  - TypeScript >= v5.1.0 *\[Development\]*
- **Require Permission:** *N/A*
- **Registry:**
  - [NPM](https://www.npmjs.com/package/@hugoalh/github-sodium)
    ```sh
    npm install @hugoalh/github-sodium[@<Tag>]
    ```
    ```js
    import ... from "@hugoalh/github-sodium";
    ```

> **ℹ️ Notice:** It is also able to import part of the module with sub path if available, see [file `package.json`](./package.json) property `exports` for available sub paths.

## 🧩 API

- ```ts
  class GitHubSodiumSealer {
    constructor(publicKey: string): GitHubSodiumSealer;
    encrypt(value: string): string;
    static seal(publicKey: string, value: string): string;
  }
  ```
- ```ts
  function seal(publicKey: string, value: string): string;
  ```

> **ℹ️ Notice:** Documentation is included inside the script file.

## ✍️ Example

- ```js
  import { GitHubSodiumSealer } from "@hugoalh/github-sodium";

  new GitHubSodiumSealer("base64-encoded-public-key").encrypt("plain-text-secret");
  //=> "+ZYvJDZMHUfBkJdyq5Zm9SKqeuBQ4sj+6sfjlH4CgG0="
  ```
