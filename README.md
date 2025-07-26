# Hex 2025 Vue3 Camp

六角學院 2025 Vue3 前端新手營


## GitHub Pages

- [課前影音 - Vite CDN](./Pre1ViteCDN/)
- [課前影音 - Vite 環境](./Pre1ViteEnv/)


## Notes

### Create Vite Vue Project

```shell
# Option 1: create project with create-vite (select **Vue** when prompted)
npm create vite@latest

# Option 2: create project with create-vue (Vue 3 + Vite by default)
npm create vue@latest
```

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

### Push README.md to `gh-pages`

```shell
git worktree add tmp gh-pages
cd tmp
git pull
git checkout main -- README.md
git commit -m "Update README.md for GitHub Pages"
git push
cd ..
git worktree remove tmp
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

### Git

#### Create/Switch Branch

Create and switch to a new branch:

```shell
# Option 1: Create the branch, then switch to it
git branch feature/my-new-feature
git switch feature/my-new-feature

# Option 2: Create and switch in one step (recommended)
git switch -c feature/my-new-feature

# Option 3: Legacy equivalent using `checkout`
git checkout -b feature/my-new-feature
```

#### Delete Branch

Delete remote branch:

```shell
git push origin --delete my-branch-name
```

Delete local branch:

```shell
git branch -d my-branch-name
# Or force delete (if not merged yet)
git branch -D my-branch-name
```

#### Recommended Branch Naming Pattern

```text
[purpose]/[topic-or-description]
```

Suggested prefixes:
- `practice/`: for learning or coding drills
- `experiment/` or `sandbox/`: for trying new tech
- `demo/`: for presentation or example setups
- `feature/`: for real app features
- `bugfix/` or `fix/`: for bug fixing

Use **kebab-case** for consistency: `feature/my-new-feature`

#### Partial Staging

Add partial change for committing (e.g. for separate purposes):

```shell
git add -p path/to/file
```

This allows you to interactively stage code block by block (hunk by hunk).

## Issues

### Hidden Files Included on First Deploy

When deploying with `gh-pages`, hidden files (dotfiles) such as `.gitattributes`, `.gitignore`, and others may be included in the newly created orphan branch `gh-pages`.  
**Workaround:**  
Manually create the orphan branch `gh-pages` before deploying with `gh-pages`.  
You can follow the steps in the ["Create Orphan Branch"](#create-orphan-branch) section above to do this.
