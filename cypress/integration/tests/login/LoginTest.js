import { constants } from 'buffer'
import Actions from '../../infra/Actions'
import constant from '../../infra/Constant'
import HomePage from '../../pom/HomePage'
import LoginPage from '../../pom/LoginPage'
import SettingPage from '../../pom/SettingsPage'
const data = require('../../../fixtures/login/LoginTest.json')
const actions = new Actions()
const loginPage = new LoginPage()
const homePage = new HomePage()
const settignPage = new SettingPage()

data.forEach((JsonObject) => {
  describe('LoginTest', () => {
    before(() => {
      cy.visit('https://demo.productionready.io/#/login')
    })

    it('valid credential test ', function () {
      actions.type(loginPage.email, JsonObject.email)
      actions.type(loginPage.password, JsonObject.password)
      actions.click(loginPage.signInButton)
      /*
      test verification
      */
      actions.assertTitleEqual(constant.HOME_PAGE)
      actions.click(homePage.settingsLink)
      actions.click(settignPage.clickHereToLogoutButton)
      actions.click(homePage.signInLink)
    })
  })
})