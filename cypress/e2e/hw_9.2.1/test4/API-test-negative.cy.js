// Create new user with empty login
describe('Create new user with empty login', () => {
    it('should return status code 401', () => {
        cy.request({
            method: 'POST',
            url: '/api/register',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your_access_token_here'
            },
            body: {
                "id": 0,
                "login": " ",
                "firstName": "Sofia",
                "lastName": "Spektor",
                "email": "sofiaspektor22@gmail.com",
                "imageUrl": "string",
                "activated": true,
                "langKey": "en",
                "createdBy": "string",
                "createdDate": "2024-02-22T12:12:59.374Z",
                "lastModifiedBy": "string",
                "lastModifiedDate": "2024-02-22T12:12:59.374Z",
                "authorities": [
                    "ROLE_STUDENT"
                ],
                "password": "542073"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(401);
        });
    });
});

// Create a new user with login consisting of digits
describe('Create a new user with login consisting of digits', () => {
    it('should return status code 401', () => {
        cy.request({
            method: 'POST',
            url: '/api/register',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your_access_token_here'
            },
            body: {
                "id": 0,
                "login": "12345 ",
                "firstName": "Sofia",
                "lastName": "Spektor",
                "email": "sofiaspektor212@gmail.com",
                "imageUrl": "string",
                "activated": true,
                "langKey": "en",
                "createdBy": "string",
                "createdDate": "2024-02-22T12:12:59.374Z",
                "lastModifiedBy": "string",
                "lastModifiedDate": "2024-02-22T12:12:59.374Z",
                "authorities": [
                    "ROLE_STUDENT"
                ],
                "password": "542073"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(401);
        });
    });
});

// User registration with login length more than 50 letters
describe('User registration with login length more than 50 letters', () => {
    it('should return status code 401', () => {
        cy.request({
            method: 'POST',
            url: '/api/register',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your_access_token_here'
            },
            body: {
                "id": 0,
                "login": "SofiaSofiaSofiaSofiaSofiaSofiaSofiaSofiaSofiaSofiaS ",
                "firstName": "Sofia",
                "lastName": "Spektor",
                "email": "sofiaspektor212@gmail.com",
                "imageUrl": "string",
                "activated": true,
                "langKey": "en",
                "createdBy": "string",
                "createdDate": "2024-02-22T12:12:59.374Z",
                "lastModifiedBy": "string",
                "lastModifiedDate": "2024-02-22T12:12:59.374Z",
                "authorities": [
                    "ROLE_STUDENT"
                ],
                "password": "542073"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(401);
        });
    });
});
