import request from 'supertest'
import { describe, it, expect } from 'vitest'
import app from '../server'

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

        it('should get users if token is valid', () => {
            return request(app)
                .get('/users')
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MzFiYTYyYy1hOGY2LTQyZWQtOTc3ZC1kMDA1NTQyY2Q2MDMiLCJ1c2VybmFtZSI6IkphZGUgTWFyeSBEb2UiLCJlbWFpbCI6ImphZGVtYXJ5QGV4YW1wbGUuY29tIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0yMFQxNToxOTowOC41MzBaIiwiaWF0IjoxNjg3MjkzMTIyLCJleHAiOjE2ODcyOTY3MjJ9.alWLl6N968jdPscMr-TgniqlLZlIITam5dJ4JGvTi6Q')
                .expect(200)
                .then((response: request.Response) => {
                    expect(response.body).toBeTruthy();
                });
        }),

        it('should add a new user if token is valid', async () => {
            const newUser = {
                username: "Jon Snow",
                email: "snow@example.com",
                password: "Pas$w0rd!"
            }

            const response = await request(app)
                .post('/users/register')
                .send(newUser)
                .expect('Content-Type', /json/)
                .set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1MzFiYTYyYy1hOGY2LTQyZWQtOTc3ZC1kMDA1NTQyY2Q2MDMiLCJ1c2VybmFtZSI6IkphZGUgTWFyeSBEb2UiLCJlbWFpbCI6ImphZGVtYXJ5QGV4YW1wbGUuY29tIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0yMFQxNToxOTowOC41MzBaIiwiaWF0IjoxNjg3MjkzMTIyLCJleHAiOjE2ODcyOTY3MjJ9.alWLl6N968jdPscMr-TgniqlLZlIITam5dJ4JGvTi6Q')
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
                "email": 'jademary@example.com',
                "password": 'Pas$w0rd!'
            })
    })
})