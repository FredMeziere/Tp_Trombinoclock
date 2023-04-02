const { Client } = require('pg');

const connectionString = 'postgresql://etudiant:js4life@pg.oclock.lan/trombi';

const client = new Client({
  connectionString,
});

client.connect();

client.query(`SELECT name FROM "promo" ORDER BY "name" LIMIT 10;`, (err, res) => {
  if (!err){
    // console.log(res);
    // console.log(res.rows);
    for (const row of res.rows ){
      console.log(row.name);
    }
  }
  
  client.end();
})
