

module.exports = {
    '@tags': ['smoke'],

    'login com sucesso': (browser) =>{

        let login = browser.page.login()
        let sidebar = browser.page.sidebar();

        login.with('ericbiu@hotmail.com','99918278')
        sidebar. expectLoggedUser('eric')
    }
}

//para tranpilar usar o babel para usar o ES6