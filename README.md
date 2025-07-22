# Hex2025Vue3Camp
六角學院 2025 Vue3 前端新手營

## GitHub Pages

- [課前影音 - Vite CDN](./Pre1ViteCDN/)
- [課前影音 - Vite 環境](./Pre1ViteEnv/)

## Issues

- `gh-pages` NPM package may include hidden files (dotfiles) when the `gh-pages` branch does not yet exist.
    To prevent this issue, ensure the `gh-pages` branch is created manually before deploying with the `gh-pages` package.

### Create Orphan Branch

The following steps show how to manually create an orphan barnch `gh-pages` for GitHub Pages.

```shell
git worktree add --orphan -b gh-pages tmp
cd tmp
git checkout main -- README.md
git commit -m "Add README.md for GitHub Pages"
# Or an empty commit if you have nothing to add/checkout
git commit --allow-empty -m "Create orphan branch gh-pages for GitHub Pages"
git push --set-upstream origin gh-pages
cd ..
git worktree remove tmp
```

### Delete Branch

```shell
git push origin --delete gh-pages
git branch -d gh-pages
```

### Push Pre1ViteCDN to `gh-pages`

```shell
git worktree add tmp gh-pages
cd tmp
git checkout main -- Pre1ViteCDN/index.html
git checkout main -- Pre1ViteCDN/main.js
git commit -m "Update Pre1ViteCND to GitHub Pages"
git push
cd ..
git worktree remove tmp
```
