const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const routes = require('./routes');

app.use(morgan('tiny'))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.get('/', (req, res) => {
    res.send({
        message : 'Hello 👋',
        status : 'server ready 🚀'
    })
});

app.listen(port, () => {
    console.log(`Running away on ${port}`);
})