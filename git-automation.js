// Git automation example using simple-git
const simpleGit = require('simple-git');
const fs = require('fs');
const git = simpleGit();

function logToFile(message) {
  const timestamp = new Date().toISOString();
  fs.appendFileSync('git-automation.log', `[${timestamp}] ${message}\n`);
}

async function automateGit() {
  try {
    logToFile('Start git automation');
    await git.add('.');
    logToFile('Staged all changes');
    const commitSummary = await git.commit('Automated commit from script');
    logToFile(`Commit: ${commitSummary.summary.changes} changes, message: ${commitSummary.summary.message}`);
    await git.push('origin', 'main');
    logToFile('Pushed to GitHub');
    console.log('Changes pushed to GitHub!');
  } catch (err) {
    logToFile(`Error: ${err.message}`);
    console.error('Git automation failed:', err);
  }
}

automateGit();
