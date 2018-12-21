/* globals gauge*/
"use strict";
const {
    openBrowser,
    closeBrowser
} = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() == 'true' ? true : false;

beforeSuite(async () => openBrowser({
    headless,
    args: ['--window-size=1440,900']
}));

afterSuite(async () => closeBrowser());