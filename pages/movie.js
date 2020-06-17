
var createActions = {
    createForm: function () {
        return this
            .click('@addButton')
            .waitForElementVisible('@movieForm', 3000) // 3 segundos
    },

    selectStatus: function (status) {
        return this
            .click('@statusSelect')
            .useXpath() // para se usar o Xpath
            .waitForElementVisible(`//li//span[contains(text(),"${status}")]`, 2000) //Xpath, usando interpolação, com  apostrofo(`) em vez de (')
            .click(`//li//span[contains(text(),"${status}")]`)
            .useCss() // voltando para usar css
    },

    insertCast: function (cast) {
        const browser = this

        cast.forEach(function (actor) {
            browser
                .setValue('@castInput', actor)
                .api.keys(browser.api.Keys.TAB) //.Keys.TAB K maiusculo
        })
        return this
    },

    uploadCover: function(fileName){
        let fullPath = require('path').resolve(__dirname, '../images/' + fileName)
        return this
        .setValue('@uploadInput', fullPath)
        .pause(1000)
        .assert.attributeContains('.picture-src', 'src', 'blob')
    }
}



module.exports = {
    commands: [createActions],
    elements: {
        addButton: '.movie-add',
        searchInput: 'input[placeholder^=Pesquisar]',// ^ comeca com, $ termina com, * contem
        searchIcon: '#search-movie',
        alertDanger: '.alert-danger',
        movieForm: '#movie-form',
        titleInput: 'input[name=title]',
        statusSelect: 'input[placeholder=Status]',
        yearInput: 'input[name=year]',
        dateInput: 'input[name=release_date]',
        castInput: '.cast',
        plotInput: 'textarea[name=overview]',
        uploadInput: '#upcover',
        createButton: '#create-movie',
        list: 'table tbody',
        tr: 'table tbody tr'
        
    }
}