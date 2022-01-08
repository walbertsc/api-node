const express = require('express');
const authMiddleware = require('../middlewares/auth');

const Project = require('../models/projetc');
const Task = require('../models/task');

const router = express.Router();

router.use(authMiddleware);

router.get('/', (req, res) => {
    res.send({ ok: true})
});

module.exports = app => app.use('/projects', router);