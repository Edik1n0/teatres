const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/enfermeras/perfil', (req, res) => {
    res.render('enfermeras/perfil');
});

router.get('/enfermeras/agregar', (req, res) => {
    res.render('enfermeras/agregar');
});

router.post('/agregar-paciente', async (req, res) => {
    const {pacientenombre,
        pacienteedad,
        pacientetel,
        pacientecorreo,
        pacienteingreso,
        pacientesalida,
        pacienteeps,
        pacienteparentezco,
        pacientediagnostico,
        pacienteservicio} = req.body;
    
        const newPaciente = {
        pacientenombre,
        pacienteedad,
        pacientetel,
        pacientecorreo,
        pacienteingreso,
        pacientesalida,
        pacienteeps,
        pacienteparentezco,
        pacientediagnostico,
        pacienteservicio
    };
    await pool.query('INSERT INTO pacientes SET ?', [newPaciente]);
    res.send('recibido');
});

router.get('/enfermeras/lista', async (req,res) => {
    const pacientes = await pool.query('SELECT * FROM pacientes');
    res.render('enfermeras/listado', {pacientes})
});

router.get('/enfermeras/solicitud/:id', async (req,res) => {
    const {id} = req.params;
    const registros = await pool.query('SELECT * FROM registros WHERE id = ?', [id]);
    res.render('enfermeras/solicitud', {registros: registros[0]});
});


router.get('/enfermeras/solicitudes', async (req,res) => {
    const registros = await pool.query('SELECT * FROM registros');
    res.render('enfermeras/solicitudes', {registros})
});

router.get('/enfermeras/individual/:id', async (req,res) => {
    const {id} = req.params;
    const pacientes = await pool.query('SELECT * FROM pacientes WHERE id = ?', [id]);
    res.render('enfermeras/individual', { pacientes: pacientes[0] });
});

module.exports = router;