/* globals gauge*/
"use strict"
const { title } = require("taiko");
const {
    assert,
    expect,
    should
} = require("chai");

step("Should be at main account page", async function () {
    let mainPageTitle = await title();
    expect(mainPageTitle).to.equal('account')
});

step("Search for account <account>", async function (account) {
    await write(account, inputField({ 'id': 'accountSearchField' }))
    await click("Search")
})
