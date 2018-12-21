const { write, click, goto, press, inputField, contains, text, title, highlight } = require("taiko");
const { salesforce_url, salesforce_username, salesforce_password, salesforce_sandbox } = process.env;
const { assert, expect } = require("chai");


step("Login into Salesforce", async function() {
    await goto(salesforce_url)
	await write(salesforce_username, inputField("Username"), { waitForNavigation: false })
    await write(salesforce_password, inputField("Password"), { waitForNavigation: false })
    await click("Log In to Sandbox")
});

step("Should be on Salesforce", async function() {
	let val = await contains(salesforce_sandbox).exists()
	expect(val.description).to.equal("Exists")
});