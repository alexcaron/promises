/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var getGitHubProfileAsync = require('./promisification').getGitHubProfileAsync;
var pluckFirstLineFromFileAsync = require('./promiseConstructor').pluckFirstLineFromFileAsync


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return pluckFirstLineFromFileAsync(readFilePath)
  .then(function (userNameFromFile) {
    return getGitHubProfileAsync(userNameFromFile)
  })
  .then(function (gitHubProfile) {
    fs.writeFileSync(writeFilePath, JSON.stringify(gitHubProfile));
  });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
