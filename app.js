/**
 * GNU GENERAL PUBLIC LICENSE v3.0
 *
 * @author Gabriel Santiago
 *
 * Created at     : 2020-06-19 17:35:47
 * Last modified  : 2020-06-19 21:53:57
 */

// Initialize development ENV variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

var { configureExpressApp, configureErrors } = require('./configuration');
var express = require('express');
var api = require('./routes/api');

var app = express();

configureExpressApp(app);

app.use('/api', api);

configureErrors(app);

var port = process.env.PORT || '3001';

app.listen(port, () => {
    console.log(`Listening at PORT: ${port}`);
});
