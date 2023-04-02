// on a besoin d'un client connecté à la base de données
// pour pouvoir intéragir avec elle
const client = require('./database');

// le datamapper est un objet qui 
const dataMapper = {
  findAllPromos: async () => {
     // on récupére la liste des promos depuis la base de données et     
     const promoResults = await client.query(
      `
      SELECT *
      FROM "promo"
      ORDER BY "name" ASC;
      `
    );

    // on les renvoie
    return promoResults.rows;
  },
  findOnePromo: async (id) => {
    const selectQuery = `
      SELECT *
      FROM "promo"
      WHERE "id" = ${id}
    `;

    // ici, on attend la réponse et on la renvoie sans
    // variable intermédiaire.
    const promoResults =  await client.query(selectQuery);

    if (promoResults.rowCount === 1){
      return promoResults.rows[0];
    }else{
      return null;
    }

  },
  findAllStudentsByPromo: async (promoId) => {
    // je prépare la requête permettant de récupérer 
    // tous les étudiants de la promo
    const sqlStudents = `
      SELECT * 
      FROM "student" 
      WHERE "promo_id" = ${promoId}
    `;

    const studentsResults = await client.query(sqlStudents);
    return studentsResults.rows;
  },
  findOneStudent: async (studentId) => {
    const sqlStudent = `
      SELECT *
      FROM "student"
      WHERE "id" = ${studentId}
    `;

    const studentResults = await client.query(sqlStudent);

    if (studentResults.rowCount === 1){
      return studentResults.rows[0];
    }else{
      return null;
    }
  },
};

module.exports = dataMapper;