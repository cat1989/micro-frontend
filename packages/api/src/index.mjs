import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false,
}))

app.get('/api/users', (req, res) => {
    const users = [
        {
            id: 1,
            name: 'John',
        },
        {
            id: 2,
            name: 'Mary',
        },
    ]
    setTimeout(() => {
        res.send(users).end()
    }, 1000 * 5)
})

app.listen(10086, () => {
    console.log('Server start succesfully.')
})
