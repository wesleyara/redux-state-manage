<h1 align="center" title="Vite Helper">
  redux-state-manage
</h1>

<h2 align="center">Redux State Manage (RSM) is a solution for easy implements Redux in your project.</h2>

[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.png?v=103)](https://opensource.org/licenses/mit-license.php)
[![npm version](https://img.shields.io/npm/v/redux-state-manage.svg?style=flat-square)](https://www.npmjs.com/package/redux-state-manage)
[![npm downloads](https://img.shields.io/npm/dm/redux-state-manage.svg?style=flat-square)](http://npm-stat.com/charts.html?package=cz-conventional-changelog&from=2015-08-01) <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section --> [![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)](#contributors-) <!-- ALL-CONTRIBUTORS-BADGE:END -->

<h4 align="center">
 <a href="#-how-use">:rocket: How use</a> •
 <a href="#️-tools">🛠️ Tools</a> •
 <a href="#-contributing">:pencil: Contributing</a> •
 <a href="#-thanks">:adult: Thanks</a> •
 <a href="#-license">:page_facing_up: License</a>
</h4>

<br>

# :rocket: How use

Instalation:

```bash
npm install redux-state-manage
#or
yarn add redux-state-manage
```

Answer the questions (When choosing the tool, use the arrows keys to navigate, the spacebar to select and enter to finish)

# 🛠️ Utilization

For state handling, we will use `useReduxState` as a replacement for useState.

```tsx
import { useReduxState } from 'redux-state-manage';

const App = () => {
  const [state, useMutateState] = useReduxState('stateName', 'initialValue');

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => useMutateState('stateName', 'new value')}>Change state</button>
    </div>
  );
};
```

For fetching data, we will use `useReduxFetch` as a replacement for useEffect.

```tsx
import { useReduxFetch, useMutateFetch, fetcher } from 'redux-state-manage';

const App = () => {
  // the id is unique for each request
  const { data, error, isLoading } = useReduxFetch(
    "http://localhost:3333",
    "data",
    fetcher
  );

  return (
    <div>
      <h1>{data} - {error} - {isLoading}</h1>
      <button onClick={() => useMutateFetch('http://localhost:3333', 'data', fetcher)}>Change data</button>
    </div>
  );
};
```

The two main methods were inspired by `useState` and `SWR`, using redux as the state manager.

# :pencil: Contributing

Your contribution to the `redux-state-manage` is essential for the evolution of the project, you can do it as follows:

- Open an [issue](https://github.com/wesleyara/redux-state-manage/issues) to clear doubts, report bugs or give ideas
- Open a [pull request](https://github.com/wesleyara/redux-state-manage/pulls) to give ideas for code improvement, implementation of new features and bug fixes

These are just some of the ways you can contribute to the project read the [CONTRIBUTING](https://github.com/wesleyara/redux-state-manage/blob/main/.github/CONTRIBUTING.md) for more information

# :adult: Authors

<table>
  <tr>
    <td align="center"><a href="https://wesleyaraujo.dev/"><img src="https://avatars.githubusercontent.com/u/89321125?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Wesley Araújo</b></sub></a><br /></td>
  </tr>
</table>

## ✨ Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

# :page_facing_up: License

redux-state-manage is a open source project licensed as [MIT](LICENSE).

