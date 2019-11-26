import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req,res) => {
  res.sendfile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req,res) => {
  // Hard coding for simplicity. Pretend this is an actual database
  res.json([
    {'id': 1, 'firstName':'Martin', 'lastName':'Smith', 'email': 'martin@gmail.com'},
    {'id': 2, 'firstName':'Michael', 'lastName':'Smith', 'email': 'michael@gmail.com'},
    {'id': 3, 'firstName':'Olivia', 'lastName':'Smith', 'email': 'olivia@gmail.com'},
  ])
})

app.listen(port, (err)=> {
  if(err){
    console.log(err)
  } else {
    open('http://localhost:' + port);
  }
});
