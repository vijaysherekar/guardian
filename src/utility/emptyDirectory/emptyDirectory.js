const rimraf = require('rimraf');

const emptyDirectory = async (path) => {
   await rimraf(`${path}*`, function () { console.log(`Emptied files in path: ${path}`); });
}

module.exports = emptyDirectory