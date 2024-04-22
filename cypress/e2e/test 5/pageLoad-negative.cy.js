// Test number 2
describe('Login Test', () => {
    it('Should not login with incorrect password', () => {
      cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/')
      cy.get('#account-menu').click()
      cy.get('#login-item').click()
      cy.get('input[name="username"]').type('User_1984');
      cy.get('input[name="password"]').type('incorrect_password'); // Изменяем пароль на неправильный
      cy.get('button[type="submit"]').click();
      cy.url().should('not.include', 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc') // Проверяем, что URL не изменился после попытки входа
      cy.contains('Sqlverifier').should('not.be.visible') // Проверяем, что элемент с текстом "Sqlverifier" не отображается, что означает, что вход не выполнен
    })
  })
  