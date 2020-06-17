

module.exports = {
    '@tags': ['smoke', '404'],

    before: function (browser) {

        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        login.with('ericbiu@hotmail.com','99918278')
        sidebar. expectLoggedUser('eric')
        },


    'quando eu busco um titulo não encontrado': function(browser){
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', 'Não é mais um besteirol Americano')
            .click('@searchIcon')
    },

    'então devo ver uma mensagem de alerta': function(browser){
        let movie = browser.page.movie()

        movie
            .waitForElementVisible('@alertDanger', 10000)
            .assert.containsText('@alertDanger', 'Puxa! não encontramos nada aqui :(')
    }
}