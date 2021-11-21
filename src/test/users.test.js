const server = require("./server")
const supertest = require('supertest');


//login
test('test login.', async () => {
    const res = await server.post('/api/users/login').send({
        "username":"slide.xiao@gmail.com",
        "password":"Aa12345678"
    })
    expect(res.statusCode).toEqual(200)
})

// info
test('test get user info without token.', async () => {
    const res = await server 
      .get('/api/users/info')
      expect(res.statusCode).toEqual(401)
})
