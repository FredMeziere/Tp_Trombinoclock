// on importe le dataMapper qui contient
// l'ensemble des méthodes permettant d'interagir avec la base de données.
const dataMapper = require ('../dataMapper');

const promoController = {
  list: async (req, res) => {
    
    // on essaie ...
    try{

      // ... de récupérer la liste des promos depuis la base de données
      //
      // Ici, on demande au dataMapper de nous fournir la liste des promos
      const promos = await dataMapper.findAllPromos();

      // et de s'en servir pour rendre la vue
      res.render('promo/list', {promos: promos});
    } catch(error){ // mais si jamais quelque chose se passe mal

      console.trace(error);
      // alors on retourne une réponse HTTP en code 500
      res.status(500).send('oups, une erreur s\'est produite...');
    }
    
    /* 
    Avec les callback, on écrivait ça comme ça :

    // On se sert maintenant du client connecté à la bdd
    // pour récupérer nos données.
    // client.query prend 2 arguments :
    // - la reqûete SQL à exécuter,
    // - le callback de traitement des résultats et des erreurs.
    client.query(
      `
      SELECT *
      FROM "promo"
      ORDER BY "name" ASC;
      `,
      (error, results) => {
        // query transmettra en argument de cette fonction :
        // - les erreurs éventuelles,
        // - le résultat éventuel.
        if (!error){
          // en cas de succès, on transmet
          // les résultats de la requête à la vue
          // pour qu'elle s'occupe de la mise en forme.
          console.table(results.rows);
          res.render('promo/list', {promos: results.rows});
        }else{
          // en cas d'erreur, on en garde trace
          // et on indique au client qu'un erreur s'est produite.
          console.trace(error);
          res.status(500).send('oups, une erreur s\'est produite...');
        }
      }
    );    
    // transmettre un objet en deuxième argument
    // lors de l'appel de render
    // permet de rendre disponible les propriétés de l'objet
    // comme variable dans notre vue.
    // res.render('promo/list', { promos: promos });

    */
  },
  item: async (req, res, next) => {
    // plan d'action pour afficher la bonne promo
    // 1 - récupérer l'identifiant de la promo à afficher
    const id = parseInt(req.params.id, 10);

    // le fait d'ajouter await sur une promesse permet de récupérer
    // la valeur promise.
    // ici, le traitement est "bloqué" jusqu'à l'optention de la valeur promise.
    // c'est pour cela que l'on doit déclaré comme asynchrone la fonction 
    // dans laquelle on attend, afin de préciser qu'elle peut s'exécuter dans son coin
    // pendant que le reste de notre application continue de vivre.

    // A RETENIR : Si on utilise await, on le fait dans une fonction async

    // on attend le résultat de notre requête
    try{

      // on demande au dataMapper la promo qui nous intéresse
      const promo = await dataMapper.findOnePromo(id);
      
      // si le résultat a une seule ligne
      // (j'ai demandé une promo en filtrant sur son id qui est la clé primaire)
      //
      if (promo){
        res.render('promo/item', { promo: promo });
      }else{
        next();
      }
    }catch (error){
      console.trace(error);
      res.status(500).send('oups, une erreur s\'est produite...');
    } 
  },
};

module.exports = promoController;