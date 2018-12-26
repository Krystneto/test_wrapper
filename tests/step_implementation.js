const { inputField, goto, write, click } = require("taiko") 
const { navigate, write:writeW, click:clickW } = require("../utils/taikow.js");
const { assert, expect } = require("chai");


step("Navigate to google", async function() {

    // Vanilla Taiko 
    // goto("google.com")
    // await write("Hello World")
    // await click("Google Search"
    
    let googleInput = () => inputField({ name: 'q'})


    await navigate.to("google.com");
            // .withOptions({timeout: 1000})

    await writeW("Hello Wrapper")
            .withOptions({delay:500})
            .into(googleInput())

    await clickW
            .withOptions({ waitForNavigation: true })
            .on("Google Search")

});