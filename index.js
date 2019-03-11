
const express = require('express');
const app = express();
const http = require('http')
const reload = require('reload')

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname);
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index');
});

const server = http.createServer(app)

server.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
    console.log('See at http://localhost:5000')
});

reload(app)