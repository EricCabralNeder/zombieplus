

module.exports = {

    'nao cadastrado': (browser) => {
        let login = browser.page.login()
        login
            .with('@emailInput', '99918278')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }

}

