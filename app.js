const express = require('express');
const layout = require('./views/layout.js');
const app = express();
const models = require('./models');
const wikiRouter = require('./routes/wikiRouter')
// const userRouter = require('./routes/userRouter')

app.use(express.static('views'));

app.use('/wiki', wikiRouter);

app.get('/', function(req, res) {
  res.send(layout(''));
});

const PORT = 3000;
const init = async () => {
  await models.db.sync({force: true})
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
  })
}

init();






