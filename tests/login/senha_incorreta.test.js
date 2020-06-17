

module.exports = {

    'senha incorreta': (browser) => {
        let login = browser.page.login()
        login
            .with('ericbiu@hotmail.com', '1232121')
            .expectAlertDanger('Usuário e/ou senha inválidos')
    }
}

