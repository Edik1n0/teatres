const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', (req, res) => {
    res.render('layouts/home');
});

router.get('/nosotros', (req, res) => {
    res.render('layouts/nosotros');
});

router.get('/servicios', (req, res) => {
    res.render('layouts/servicios');
});

router.get('/formulario-solicitud', (req, res) => {
    res.render('layouts/formulario-solicitud');
});

module.exports = router;