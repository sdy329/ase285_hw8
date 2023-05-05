// To unit-test the function that generates 'password.enc.txt', you should
//  make sure the unit test does the following check.
// 1. Make sure password.enc.txt does not exist before running the function.
// 2. Make sure password.enc.txt does exist after running the function.
// 3. Make sure the contents of password.enc.txt has correct contents.
// For unit tests, you don't have to have a large input in the beginning.
// Start with smallest input, and add more contents in the input

const p = require('../src/makepassword');
const u = require('../src/utility');
const fs = require('fs');

/*
// Let's say you have a toHash() function in this module

test('Check toHash(): if the email:password is converted into email:hashPassword', () => {
    const input = ???
    const output = ???
    expect(p.toHash(input)).toBe(output);
});
*/

describe("makepassword should create file", () => {
    test('',() => {
        const fileName = './tests/passwordtest.txt'
        const encFileName = './tests/passwordtest.enc.txt'

        // 1. Make sure password.enc.txt does not exist before running the function.
        if (fs.existsSync(encFileName)) {
            fs.unlinkSync(encFileName);
        }
        expect(fs.existsSync(encFileName)).toBe(false);
        
        p.makepassword(fileName, encFileName)

        // 2. Make sure password.enc.txt does exist after running the function.
        expect(fs.existsSync(encFileName)).toBe(true);

        // 3. Make sure the contents of password.enc.txt has correct contents.
        const expectedContents = "sm.cho@hello.com:19a78c1c7f89bc66df805a06358adeba4f464a11e1c031aa22e755ed6cc5c61b"
        const actualContents = u.readFile(encFileName);
        expect(actualContents).toEqual(expectedContents);
    })
})