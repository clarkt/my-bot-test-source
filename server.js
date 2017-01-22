const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const GitHubApi = require('github');



app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.post('/altinn', ({body: payload}, response) => {

    console.log('payload: ', payload);
    // if (payload && payload.commits) {
    //     treatPayload(payload);
    // }
    response.end();
});

app.listen(app.get('port'), () => {
    console.log('Node app is running on port', app.get('port'));
});