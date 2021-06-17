const express = require('express')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./router/index')
const port = 99;

app.use(cors());

routes(app)




app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})

