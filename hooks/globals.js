
module.exports = {

    beforeEach: (browser, done) => {
        let login = browser.page.login()
        done()
    },


    afterEach: (browser, done) => { // depois de tudo
        browser
            .end()
        done()
    }
}