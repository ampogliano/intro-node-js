// write some tests
const { users, findUser } = require('./users')
describe('users', () => {
  test('findUser returns a user', async () => {
    let user = await findUser(1)
    expect(user.id).toBe(1)
  })
  test('findUser returns correct user', async () => {
    let user = await findUser(1)
    expect(user.email).toBe('readycoder1@gmail.com')
  })
  test('users array is array when created', async () => {
    expect(users).toBeInstanceOf(Array)
    expect(users).toHaveLength(20)
    expect(users[4]).toBeInstanceOf(Object)
  })
})
