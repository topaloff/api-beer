const request = require('supertest')
const app = require('../app')
describe('Add User', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users/signin')
      .send({
        name:"Kozik",
        firstName:"Lucie",
        email: "fdsfsas@gmail.com",
        password: "1234",
        birthday:"1990-10-10"
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('name')
    expect(res.body).toHaveProperty('firstName');
  })
})