const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('layouts/home');
});

router.get('/nosotros', (req,res) => {
    res.render('layouts/nosotros');
});

router.get('/servicios', (req,res) => {
    res.render('layouts/servicios');
});

router.get('/formulario-solicitud', (req,res) => {
    res.render('layouts/formulario-solicitud');
});

module.exports = router;