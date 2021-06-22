const express = require('express')
const app = express();
const cors = require('cors');
const routes = require('./router/index')
const config = require('./config')
const database = require('./database')


app.use(express.urlencoded({ extended: true }));

const start = async () => {
    await database()
}
start()

app.use(cors());

routes(app)

app.listen(config.port, () => {
    console.log(`listening at http://localhost:${config.port}`)
})

