const client = require('../database');

const dataMapper = require ('../dataMapper');

const studentController = {
  listByPromo: async (req, res, next) => {

    try{    
      // on récupère l'id depuis le path de la route
      const id = Number(req.params.id);

     // on exécute la requête et on attend la réponse
      const promo = await dataMapper.findOnePromo(id);
      
      // si j'ai bien récupéré un enregistrement (donc les infos de la promo que 
      // je souhaite afficher)
      if (promo){
        
        // j'exécute cette requête et attends les résultats
        const students = await dataMapper.findAllStudentsByPromo(id);

        // je confie promo et étudiants à la vue pour qu'elle les mette en forme
        res.render(
          'student/listByPromo',
          {promo: promo, students: students},
        );
      }else{
        // si ja mais, je ne trouve pas la promo demandé, bim, 404 !
        next();
      }
    } catch (error){
      // Si jamais quelque chose se passe mal à n'importe quelle
      // étape du bloc try, je trace l'erreur et je retourne
      // une erreur au client
      console.trace(error);
      res.status(500).send('Oups, une erreur s\'est produite...');
    }

    /*
    Avant async / await, avec les promesses classiques on écrivait :

    // on récupère l'id depuis le path de la route
    const id = Number(req.params.id);

    const sqlPromo = `
      SELECT *
      FROM "promo"
      WHERE "id" = ${id}
    `;

    // on lance la requête de récupération des infos de la promo
    client
      .query(sqlPromo)
      .then((results) => {
        if (results.rowCount === 1){
          const foundPromo = results.rows[0];

          const sqlStudents = `
            SELECT * 
            FROM "student" 
            WHERE "promo_id" = ${id}
          `;
          
          // on lance la requête de récupération des infos des étudiants
          client
            .query(sqlStudents)
            .then((results) => {
              const studentsByPromo = results.rows;

              // c'est seulement quand on a la promo ET les étudiants
              // que l'on peut rendre la vue.
              res.render(
                'student/listByPromo',
                {promo: foundPromo, students: studentsByPromo},
              );

            })
            .catch((error) => {
              // code 500 -> erreur serveur
              res.status(500).send('Oups, une erreur s\'est produite...');
            });


        }else{
          next();
        }
      })
      .catch((error) => {
        // code 500 -> erreur serveur
        res.status(500).send('Oups, une erreur s\'est produite...');
      });    
      */
  },

  item: async (req, res, next) => {

    try{
      // - recup d'id de l'étudiant
      const id = parseInt(req.params.id, 10);

      // - demander au dataMapper de nous trouver cet étudiant
      const student = await dataMapper.findOneStudent(id);

      if (student){
        // - rendre la vue (en lui transmettant les infos)
        res.render('student/item', {student: student});
      }else{
        next();
      }      
    }catch (error){
      console.trace(error);
      res.status(500).send('Oups, une erreur s\'est produite...');
    }
    
  }
};

module.exports = studentController;