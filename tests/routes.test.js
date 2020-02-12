const request = require('supertest')
const app = require('../app')
describe('Post Endpoints', () => {
  it('should create a new type', async () => {
    const res = await request(app)
      .post('/types/')
      .send({
        name: 'Brune',
      })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('name')
  })
})