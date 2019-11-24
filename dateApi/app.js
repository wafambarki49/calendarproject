const experss = require('express');
const bodyparser = require('body-parser');
const daysRoutes = require('./routes/days');
const app = experss();

app.use(bodyparser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/api',daysRoutes);

app.listen(8080);
