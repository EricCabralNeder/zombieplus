

module.exports = {

    'senha não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('ericbiu@hotmail.com', '')
            .expectAlertInfo('Opps. Cadê a senha?')
    }

}

