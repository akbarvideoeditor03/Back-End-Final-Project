const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT ||4000

app.use(morgan(this));

// app.use....

app.listen(port, () => {
    console.log(`Running away on ${port}`);
})

