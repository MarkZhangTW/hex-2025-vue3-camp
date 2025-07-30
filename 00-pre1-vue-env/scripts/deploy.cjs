const ghpages = require('gh-pages');
const fs = require('fs-extra');
const path = require('path');

const dest = path.basename(__dirname);
const tmpdir = 'ghpages-tmp';
const projects = ['Pre1ViteCDN'];
const excludes = projects.concat(tmpdir, '.git');

ghpages.publish('dist', {
  dest: tmpdir,
  add: true,
  async beforeAdd(git) {
    fs.readdirSync(git.cwd)
      .filter((file) => !excludes.includes(file))
      .filter((file) => fs.statSync(path.join(git.cwd, file)).isDirectory())
      .forEach((file) => fs.removeSync(path.join(git.cwd, file)));
    fs.moveSync(path.join(git.cwd, tmpdir), path.join(git.cwd, dest));
  }
}, (err) => {
  if (err) {
    console.error('Deploy failed:', err);
  } else {
    console.log('Deploy successful!');
  }
});
