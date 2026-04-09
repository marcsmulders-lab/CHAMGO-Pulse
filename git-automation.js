// Git automation example using simple-git
const simpleGit = require('simple-git');
const git = simpleGit();

async function automateGit() {
  try {
    // Stage all changes
    await git.add('.');
    // Commit with a message
    await git.commit('Automated commit from script');
    // Push to origin main
    await git.push('origin', 'main');
    console.log('Changes pushed to GitHub!');
  } catch (err) {
    console.error('Git automation failed:', err);
  }
}

automateGit();
