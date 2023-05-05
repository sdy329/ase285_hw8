'use strict'
const fs = require('fs');
const {readFile, writeFile, hash} = require('./utility')

function makepassword(passwordFileName, passwordEncFileName) {
    try {
        const passwords = readFile(passwordFileName);
        const hashedPasswords = passwords.map(password => {
            const [email, pass] = password.split(':');
            const hashedPass = hash(pass);
            return `${email}:${hashedPass}`;
        });
        writeFile(hashedPasswords, passwordEncFileName);
        console.log('Encrypted password file created successfully!');
    } catch (error) {
        console.log(error);
    }
}

if (require.main === module) {
    makepassword('./password.txt', './password.enc.txt')
}

module.exports = {makepassword};