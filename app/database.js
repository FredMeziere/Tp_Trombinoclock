// on se connecte à la BDD
const { Client } = require('pg');

const connectionString = process.env.PG_CONNECTION_STRING;

const client = new Client({
  connectionString,
});

client.connect();

// on met à disposition du reste de l'application le client connecté
module.exports = client;