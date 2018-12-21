/* globals gauge*/
"use strict";
const {
    write,
    click,
    into,
    goto,
    near,
    below,
    inputField,
    textField,
} = require('taiko');
const {
    settleit_url,
    settleit_username,
    settleit_password
} = process.env;

step("Login into SettleIt Servicing", async function () {
    await goto(settleit_url)
    await write(settleit_username, inputField("Username"), { waitForNavigation: false })
    await write(settleit_password, inputField("Password"), { waitForNavigation: false })
    await click("Login")
})
