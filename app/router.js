const router = require('express').Router();

const mainController = require ('./controllers/mainController');
const promoController = require ('./controllers/promoController');
const studentController = require ('./controllers/studentController');
const adminController = require ('./controllers/adminController');
// ou :
// const express = require('express');
// const router = express.Router();

router.get('/', mainController.home);

router.get('/promos', promoController.list);

router.get('/promos/:id', promoController.item);

router.get('/promos/:id/students', studentController.listByPromo);

router.get('/students/:id', studentController.item);

router.get('/studentadd',adminController.addstudent);

router.use(mainController.notFound);

module.exports = router;