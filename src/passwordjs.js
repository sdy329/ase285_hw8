'use strict'
const fs = require('fs');
const {readFile, hash} = require('./utility')

function passwordjs() {
    if (process.argv.length != 5) return 'false';

    const filename = process.argv[2];
    const email = process.argv[3];
    const password = process.argv[4];

    try {
        const passwords = readFile(filename);
        for (let i = 0; i < passwords.length; i++) {
            const [emailFromFile, hashedPassword] = passwords[i].split(':');
            if (emailFromFile === email && hashedPassword === hash(password)) {
                return 'true';
            }
        }
        return 'false';
    } catch (error) {
        console.log(error);
        return 'false';
    }
}

if (require.main === module) {
    console.log(passwordjs()) // print out true or false
}

module.exports = {passwordjs};
