const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/formulario-solicitud', async (req, res) => {
    const {nombreuser, teluser, emailuser, addressuser, serviceuser, descuser } = req.body;
    const newReg = {
        nombreuser,
        teluser,
        emailuser,
        addressuser,
        serviceuser,
        descuser
    };
    await pool.query ('INSERT INTO registros SET ?', [newReg]);
    res.send('recibido');
});

module.exports = router;