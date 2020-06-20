
var userActions = {
    expectLoggedUser: function(nome) {
        return this
        .waitForElementVisible('@userInfo', 100000)
        .assert.containsText('@userInfo', nome)
    }
}

module.exports = {
    commands: [userActions],
    elements: {
        userInfo: '.user .info span'
    }
}