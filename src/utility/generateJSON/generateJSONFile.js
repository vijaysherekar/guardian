const fs = require('fs');

const generateJSONFile = (path, data) => {
    try {
        fs.writeFileSync(path, JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

module.exports = generateJSONFile