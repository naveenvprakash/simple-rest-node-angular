/**
 * Created by lejo on 05/06/2015.
 */
/**
 * Created by lejo on 21/05/2015.
 */

exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine2',

    specs: ['e2e/inbox/inbox.list.spec.js'],

    onPrepare: function() {
        browser.driver.manage().window().maximize();
        browser.get('http://juliemr.github.io/protractor-demo');
    }
};