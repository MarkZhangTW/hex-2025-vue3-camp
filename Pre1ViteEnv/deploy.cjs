const ghpages = require('gh-pages');
const fs = require('fs-extra');
const path = require('path');
const dest = 'Pre1ViteEnv';
const tmpdir = 'ghpages-tmp';

ghpages.publish('dist', {
    dest: tmpdir,
    add: true,
    async beforeAdd(git) {
      fs.removeSync(path.join(git.cwd,'Pre1CDN'));
      fs.removeSync(path.join(git.cwd,'Pre1ViteEnv'));
      fs.moveSync(path.join(git.cwd, tmpdir), path.join(git.cwd, dest));
    }
}, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
  } else {
    console.log('Deploy successful!');
  }
})