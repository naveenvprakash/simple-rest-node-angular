/**
 * Created by lejo on 05/06/2015.
 */

var InboxListPage = function() {

    this.homeLink  = element.all(by.id('homeLink')).click();
    this.inboxLink = element.all(by.id('inboxLink')).click();

    this.home = function() {
        browser.get('http://localhost:63342/beesoft-base-instance/app/');
        browser.waitForAngular();
    }

    this.navigateToInboxState = function() {
        browser.get('http://localhost:63342/beesoft-base-instance/app/index.html#/inbox');
        browser.waitForAngular();
    }

    //this.navigateToInboxListState = function() {
    //    browser.get('http://localhost:63342/beesoft-base-instance/app/index.html#/inbox/list');
    //    browser.waitForAngular();
    //}

    this.getCurrentUrl = function(){
        return browser.getCurrentUrl();
    }
};

module.exports = InboxListPage;
