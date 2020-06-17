

module.exports = {

    //'@disabled':true,
    'email não informado': (browser) => {
        let login = browser.page.login()
        login
            .with('', '99918278')
            .expectAlertInfo('Opps. Cadê o email?')
    }

}

