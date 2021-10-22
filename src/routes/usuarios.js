const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/agregar-usuario', async (req, res) => {
    const {username, usertel, userservice, usermail, useraddress} = req.body;
    const newUser = {username, usertel, userservice, usermail, useraddress}
    await pool.query('INSET INTO usuarios') // Registro de usuarios
});

module.exports = router;