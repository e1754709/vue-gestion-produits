const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:8081',
}
app.use(cors(corsOptions));

const db = require('./app/models');

db.connex.sync();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Bienvenue sur le serveur' });
})

require('./app/routes/product.route')(app);

const PORT = process.env.PORT || 8060;
app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port ${PORT}`);
})