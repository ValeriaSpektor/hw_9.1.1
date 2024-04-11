describe('API Tests', () => {
    it('Should register a new user', () => {
        cy.request({
            method: 'POST',
            url: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/register',
            headers: { 
                "Connection": "keep-alive",
                "accept": "/",
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzA4NzkyNDA4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwODcwNjAwOH0.hm8rWyzSBCDNMVirgQQTai-Yyo4SpfTwkcVF7SzyZ8zTMldAlLxkGGt8JCkkB_nazTwH8G2DgqTl3m6rvi6Obw",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                "accept-encoding": "gzip, deflate",
                "content-length": 344
            },
            body: {
                "id": 0,
                "login": "user84",
                "firstName": "Sofia",
                "lastName": "Spektor",
                "email": "sofiaspektor22102014@gmail.com",
                "imageUrl": "string",
                "activated": true,
                "langKey": "en",
                "createdBy": "string",
                "createdDate": "2024-02-22T12:12:59.374Z",
                "lastModifiedBy": "string",
                "lastModifiedDate": "2024-02-22T12:12:59.374Z",
                "authorities": ["ROLE_STUDENT"],
                "password": "542073"
            },
            failOnStatusCode: false
        }).its('status').should('eq', 401);
    });

    it('Should register a new user with empty name and last name', () => {
        cy.request({
            method: 'POST',
            url: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/register',
            headers: { 
                "Connection": "keep-alive",
                "accept": "/",
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzA4NzkyNDA4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwODcwNjAwOH0.hm8rWyzSBCDNMVirgQQTai-Yyo4SpfTwkcVF7SzyZ8zTMldAlLxkGGt8JCkkB_nazTwH8G2DgqTl3m6rvi6Obw",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                "accept-encoding": "gzip, deflate",
                "content-length": 322
            },
            body: {
                "id": 0,
                "login": "IvanIv",
                "firstName": "",
                "lastName": "",
                "email": "ivanivanov@gmail.com",
                "imageUrl": "string",
                "activated": true,
                "langKey": "en",
                "createdBy": "string",
                "createdDate": "2024-02-22T12:35:27.804Z",
                "lastModifiedBy": "string",
                "lastModifiedDate": "2024-02-22T12:35:27.804Z",
                "authorities": ["ROLE_STUDENT"],
                "password": "string"
            },
            failOnStatusCode: false
        }).its('status').should('eq', 401);
    });

    it('Should register a new user with existing email', () => {
        cy.request({
            method: 'POST',
            url: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/register',
            headers: { 
                "Connection": "keep-alive",
                "accept": "/",
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzA4NzkyNDA4LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwODcwNjAwOH0.hm8rWyzSBCDNMVirgQQTai-Yyo4SpfTwkcVF7SzyZ8zTMldAlLxkGGt8JCkkB_nazTwH8G2DgqTl3m6rvi6Obw",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
                "accept-encoding": "gzip, deflate",
                "content-length": 336
            },
            body: {
                "id": 0,
                "login": "MashaF",
                "firstName": "Masha",
                "lastName": "Fedorova",
                "email": "mashafedorova@gmail.com",
                "imageUrl": "string",
                "activated": true,
                "langKey": "en",
                "createdBy": "string",
                "createdDate": "2024-02-22T12:55:17.735Z",
                "lastModifiedBy": "string",
                "lastModifiedDate": "2024-02-22T12:55:17.735Z",
                "authorities": ["ROLE_STUDENT"],
                "password": "string"
            },
            failOnStatusCode: false
        }).its('status').should('eq', 401);
    });
});
