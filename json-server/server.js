const jsonServer = require('json-server')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))

server.use(async (req, res, next) => {
    await Promise.resolve(
        setTimeout(() => {
            next()
        }, 800)
    )
})

server.use((req, res, next) => {
    if (!req.headers.authorization) {
        // add your authorization logic here
        return res.status(403).json({ message: 'auth error' })
    }
    next()
})

server.use(router)
server.use(bodyParser.json())

server.post('/login', (req, res) => {
    const { username, password } = req.body
    let db = JSON.parse(fs.readFileSync(path.resolve(__dirname, './db.json')))
    const { users } = db

    const userFromDb = users.find(
        (user) => user.username === username && user.password === password
    )

    if (userFromDb) {
        return res.json(userFromDb)
    }

    return res.status(403).json({ message: 'username or password is wrong' })
})

server.listen(8000, () => {
    console.log('JSON Server is running')
})
