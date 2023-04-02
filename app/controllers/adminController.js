const dataMapper = require ('../dataMapper');


const adminController = {
    addstudent: async (req, res) => {

    try{

        const promos = await dataMapper.findAllPromos();

      res.render('student/addstudent',{promos: promos});
      console.log(promos)
    } catch(error){ 
        console.trace(error);
        // alors on retourne une réponse HTTP en code 500
        res.status(500).send('oups, une erreur s\'est produite...');
      }
  }};

module.exports = adminController;

