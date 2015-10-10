/**
 * Created by lejo on 05/06/2015.
 */

var InboxListPage = require('./inbox.list.page');
describe('inbox list', function() {
    var page;
    beforeEach(function () {
        page = new InboxListPage();
    });
    afterEach(function () {
        page = null;
    });

    describe('navigate to home state', function() {
        it('should redirect to home page', function() {
            page.home();
            expect(page.homeLink.isDisplayed()).toBeTruthy();
            //expect(page.getCurrentUrl()).toMatch();
        });
    });

    describe('home link should open inbox state', function () {
        it('should redirect to inbox state', function(){
            page.home();
            page.homeLink.click();
            expect(page.getCurrentUrl()).toMatch(/\/inbox/);
        })

    });

    describe('navigate to inbox state', function () {
        it('should get inboxLinks value', function() {
            expect(page.inboxLink.isDisplayed()).toBeTruthy();
            expect(page.inboxLink.getText()).toMatch('go to children state inbox List');
        });
    });

    /* write spec for inbox list repeater */

});