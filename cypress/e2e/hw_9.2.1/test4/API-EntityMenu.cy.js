describe('Postman Collection Item Tests', () => {
    it('Authenticate user', () => {
        cy.request({
            method: 'POST',
            url: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/authenticate',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzA5NDAyMDcyLCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwOTMxNTY3Mn0.eQzG4yjmf10mCu156XI2ANvB6w2Nm942mExiyOCHilUF-2pAdujRCbGbfbP4vyTJjHzCBfuSQ2mE6sUH7XPLXA'
            },
            body: {
                "username": "user84",
                "password": "542073",
                "rememberMe": true
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200);
        });
    });

    it('Create user task', () => {
        cy.request({
            method: 'POST',
            url: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/user-tasks',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzA5NDAyOTQxLCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwOTMxNjU0MX0.A6J9UGLzfsEd-L1WmvtywYK7Ni02ifBrUoJ1UIGR50y1EQUIqPgj5sdjNdM_m7AX9j-V8J2BO4Ch-NySFkGhcg'
            },
            body: {
                "isSolved": true,
                "user": {
                    "id": "1502",
                    "login": "new_student"
                },
                "task": {
                    "id": "57353",
                    "text": "task",
                    "answer": "test",
                    "title": "test"
                }
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(201);
        });
    });

    it('Delete user task', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/user-tasks/59303',
            headers: {
                'accept': '*/*',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzA5MjEwMTc0LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwOTEyMzc3NH0.2__F0eHynru9fScAnhZC2nzc3DBTax3G1bEGkytZgLS1DYSZzxA7Vksew79oOQnpMlvLy82HgHmMUsEZcyYT2g'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.status).to.eql('Not found');
        });
    });

    it('Create user task without title', () => {
        cy.request({
            method: 'POST',
            url: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/user-tasks',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyXzE5ODQiLCJleHAiOjE3MDkyMDMwODMsImF1dGgiOiJST0xFX1VTRVJfU1RVREVOVCIsImlhdCI6MTcwOTExNjY4M30.AStnLB9F5s3U_V6DjVCOSQYDu08jDWvH2vK9z4fTIlkaD2LruJaH8-CVgQ3ZVOe0Pr47l9oYQFQIHMdulzN0BQ'
            },
            body: {
                "id": 59302,
                "isSolved": false,
                "user": {
                    "createdBy": null,
                    "createdDate": "2024-02-25T10:18:25.065671960Z",
                    "lastModifiedBy": null,
                    "lastModifiedDate": "2024-02-25T10:18:25.065672191Z",
                    "id": 1502,
                    "login": "new_student",
                    "firstName": null,
                    "lastName": null,
                    "email": null,
                    "activated": false,
                    "langKey": null,
                    "imageUrl": null,
                    "resetDate": null
                },
                "task": {
                    "id": 57353,
                    "text": "",
                    "answer": "test",
                    "title": " "
                }
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });

    it('Updated task', () => {
        cy.request({
            method: 'PUT',
            url: 'https://sqlverifier-live-6e21ca0ed768.herokuapp.com/api/user-tasks/59304',
            headers: {
                'accept': '*/*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzA5MjEwMTc0LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcwOTEyMzc3NH0.2__F0eHynru9fScAnhZC2nzc3DBTax3G1bEGkytZgLS1DYSZzxA7Vksew79oOQnpMlvLy82HgHmMUsEZcyYT2g'
            },
            body: {
                "id": 59304,
                "text": "string",
                "answer": "string",
                "title": "string"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(200);
        });
    });
});
