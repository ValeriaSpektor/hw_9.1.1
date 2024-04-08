describe('SQL Verifier Page Load Test', () => {
  it('Should load the SQL Verifier page successfully', () => {
    const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyXzE5ODQiLCJleHAiOjE3MTI2ODUyODksImF1dGgiOiJST0xFX1VTRVJfU1RVREVOVCIsImlhdCI6MTcxMjU5ODg4OX0.wofNxoJZOAF_v8t1cT4vY3L8FOusI9YSsso9ddy_L4TJQ3rpwhEBL7gE9hY7VlMiRdBqkLtBBRfwp8DTHGvuBA';

    cy.visit('https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    cy.get('body').should('exist');
  });
});
