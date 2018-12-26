// const { click } = require("taiko"); 
const { assert, expect } = require("chai"); 
const taiko = require("taiko"); 
const _ = require("lodash/core"); 
// const taikoWrapper = { ...taiko };

let defaultOptions = {

}

const createPageActions = (text, selector, options, url) => {
    
    return {
        _text: text,
        _selector: selector,
        _options: options, 
        _url: url,

        async into(selector) {
            // if (typeof selector === "function") {
            //     return selector();
            // }

            this._selector = selector;
            await intoWrapper(this._text, this._selector, this._options)
        },

        async to(url) {
            this._url = url;
            await gotoWrapper(this._url, this._options);
        },
        
        withOptions(options) {
            this._options = options;
            return this;
        },

        async on(selector) {
            this._selector = selector;
            await clickWrapper(this._selector, this._options);
        }
    }
}


// Wrappers
const gotoWrapper = async (url, options) => {
    if (options !== null) {
        await taiko.goto(url, options);
    } else {
        await taiko.goto(url);
    } 
}

const writeWrapper = async (value, selector, options) => {
    if (selector !== null) {
        await taiko.write(value, selector, options)
    } else {
        await taiko.write(value,_,options)
    }
}

const intoWrapper = async (value, selector, options) => {
    if (options !== null) {
        await writeWrapper(value, taiko.into(selector), options);
    } else {
        await writeWrapper(value, taiko.into(selector));
    }
}

const clickWrapper = async (selector, options) => {
    if (options !== null) {
        await taiko.click(selector, options);
    } else {
        await taiko.click(selector);
    }
}


// Containers
const gotoContainer = url => {
    return createPageActions(null,null,null, url)
}

const writeContainer = text => {
    return createPageActions(text);
}

const clickContainer = (selector=null) => {
    return createPageActions(null, selector);
}


// Container methods
gotoContainer.to = async function(url) {
    this._url = url;
    await gotoWrapper(this._url);
}

clickContainer.on = async function(selector) {
    this._selector = selector;
    await clickWrapper(this._selector, this._options);
}

clickContainer.withOptions = function(options) {
    this._options = options;
    return this; 
}

module.exports = {
    navigate:gotoContainer,
    write:writeContainer,
    click:clickContainer
}
