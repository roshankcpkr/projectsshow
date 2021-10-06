const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const urlHandler = require('./controllers/urlHandler.js');

const app = express();

const mongoURL = process.env.DB_URI|| "mongodb://sduser:sduser@sdcluster-shard-00-00-jluhu.mongodb.net:27017,sdcluster-shard-00-01-jluhu.mongodb.net:27017,sdcluster-shard-00-02-jluhu.mongodb.net:27017/urldb?ssl=true&replicaSet=SDCluster-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(mongoURL, { useNewUrlParser: true });

app.use(bodyParser.urlencoded({'extended': false}));
app.use(require('body-parser').json());

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl/new', urlHandler.addUrl);
  
app.get('/api/shorturl/:shurl', urlHandler.processShortUrl);


// Answer not found to all the wrong routes
app.use((req, res, next) => {
  res.status(404);
  res.type('txt').send('Not found');
});

const portNum = process.env.PORT || 3000;

app.listen(portNum, () => {
  console.log(`Listening on port ${portNum}`);
});

