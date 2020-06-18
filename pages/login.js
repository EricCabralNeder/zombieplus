
var loginActions = {
    with:  function(email, pass){ // nao suporte o is6 (=>)
        return this
        .navigate()
        .waitForElementVisible('@form', 50000)
        .setValue('@emailInput', email)
        .setValue('@passInput', pass)
        .click('@loginButton')
    },

    expectAlertDanger: function(texto){
        return this
        .waitForElementVisible('@alertDanger', 50000)
        .assert.containsText('@alertDanger', texto)
    },

    expectAlertInfo: function(texto){
        return this
        .waitForElementVisible('@alertInfo', 50000)
        .assert.containsText('@alertInfo', texto)
    }
}

module.exports = {
    url: '/login',
    commands: [loginActions],
    elements:{
        form: '.card-login',
        emailInput: 'input[name = email]',
        passInput: 'input[name = password]',
        loginButton: '.login-button',
        alertDanger: '.alert-danger',
        alertInfo: '.alert-info'
    }
}