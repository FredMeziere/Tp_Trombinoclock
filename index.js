// cette instruction permet de rendre accessible
// les variable d'environnement du fichier .env dans notre application
require('dotenv').config();

// ces informations seront accessibles depuis process.env
// console.log(process.env);

const express = require('express');

const router = require("./app/router");

const app = express();
const PORT = process.env.PORT || 5001;

// templates
app.set('views', './app/views');
app.set('view engine', 'ejs');

// static
app.use(express.static("./public"));

// routage
app.use(router);

app.listen(PORT, () => {
  console.log(`TrombinO'Clock is running on port ${PORT}`)
});