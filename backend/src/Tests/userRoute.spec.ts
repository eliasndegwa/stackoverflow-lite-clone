import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../app'

describe("user route tests", () => {
    it('should return 401 if no token is passed', async () => {
        const response = await request(app)
            .get('/users')
            .expect(401)
            .expect('Content-Type', /json/)
        expect(response.body).toEqual(
            expect.objectContaining({
                message: expect.stringMatching('Not Authorized')
            })
        )
    }),

        it('should get users if token is valid', async() => {
            return request(app)
                .get('/users')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1NjlhYjQ4MS1kZmNmLTQ0OWEtYTc1Mi05YWUxNjkzNWQxYWUiLCJ1c2VybmFtZSI6IkpvbmF0aGFuIE5kYW1idWtpIiwiZW1haWwiOiJqb25hdGhhbm5kYW1idWtpMTZAZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0yMlQxMDoxNjo1OS41NjBaIiwid2VsY29tZUVtYWlsU2VudCI6dHJ1ZSwiaWF0IjoxNjg3NDMzMzczLCJleHAiOjE2ODc0MzY5NzN9.YvOJaiE51nllMzz7QjGkxR8DKQV-hEV7UUyXq8BAp6Y')
                .expect(200)
                .then((response: request.Response) => {
                    expect(response.body).toBeTruthy();
                });
        }),

        it('should not get users (403) if token is invalid ', async ()=>{
            return   request(app).get('/users')
              .expect('Content-Type', /json/)
              .set("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMDI5ZjQ1MC0xYjRiLTQwYjEtYjE3Zi1hZTg3YzFiNzc0NmMiLCJ1c2VybmFtZSI6IkVsaWFzIHByaW5jZSIsImVtYWlsIjoiZWxpYXNAZXhhbXBsZS5jb20iLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTIyVDA5OjUwOjM2LjMzMFoiLCJ3ZWxjb21lRW1haWxTZW50IjpmYWxzZSwiaWF0IjoxNjg3NDE2NjU5LCJleHAiOjE2ODc0MjAyNTl9.sdwrpifDQSZndvofFelbjUb33wnHPJt--oYJOHaKDhM")
              .expect(403)
    
          }) 

        it.skip ('should add a new user if token is valid', async () => {
            const newUser = {
                username: "Jon Snow",
                email: "snow@example.com",
                password: "Pas$w0rd!"
            }

            const response = await request(app)
                .post('/users/register')
                .send(newUser)
                .expect('Content-Type', /json/)
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJlMDI5ZjQ1MC0xYjRiLTQwYjEtYjE3Zi1hZTg3YzFiNzc0NmMiLCJ1c2VybmFtZSI6IkVsaWFzIHByaW5jZSIsImVtYWlsIjoiZWxpYXNAZXhhbXBsZS5jb20iLCJjcmVhdGVkQXQiOiIyMDIzLTA2LTIyVDA5OjUwOjM2LjMzMFoiLCJ3ZWxjb21lRW1haWxTZW50IjpmYWxzZSwiaWF0IjoxNjg3NDE2NjU5LCJleHAiOjE2ODc0MjAyNTl9.sdwrpifDQSZndvofFelbjUb33wnHPJt--oYJOHaKDhM')
            expect(response.status).toBe(201)
            expect(response.body.message).toBe('User Registered successfully');
        }),

        it('should return an error for invalid register data', async () => {
            const invalidUser = {
                username: 'testuser',
                email: 'invalid_email',
                password: 'password123',
            };

            const response = await request(app)
                .post('/users/register')
                .send(invalidUser);

            expect(response.status).toBe(404);
            expect(response.body.message).toBe('Invalid details')
        });

    it('Should login user (200) given valid email and password', () => {
        return request(app).post('/users/login')
            .expect('Content-Type', /json/)
            .expect(200)
            .send({
                "email": 'elias@example.com',
                "password": 'Pas$w0rd!'
            })
    })
})