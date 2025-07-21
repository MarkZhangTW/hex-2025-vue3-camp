# Hex2025Vue3Camp
六角學院 2025 Vue3 前端新手營

## GitHub Pages

- [課前影音 - Vite 環境](./Pre1ViteEnv/)

## Issues

- `gh-pages` NPM package seems buggy that'll include hidden files (dotfiles) currently.

The following steps show how to manually create an orphan barnch `gh-pages` for GitHub Pages.

```shell
# Stash uncommitted changes
git stash push -m "stash changes before switching"
git switch --orphan gh-pages
git switch main
git stash pop
```
