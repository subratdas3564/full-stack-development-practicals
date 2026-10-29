const express = require('express');
const { Attendance } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		res.json(await Attendance.findAll());
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const attendance = await Attendance.findByPk(req.params.id);
		if (!attendance) return res.status(404).json({ error: 'Attendance record not found' });
		res.json(attendance);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.post('/', async (req, res) => {
	try {
		res.status(201).json(await Attendance.create(req.body));
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.put('/:id', async (req, res) => {
	try {
		const attendance = await Attendance.findByPk(req.params.id);
		if (!attendance) return res.status(404).json({ error: 'Attendance record not found' });
		await attendance.update(req.body);
		res.json(attendance);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const deleted = await Attendance.destroy({ where: { id: req.params.id } });
		if (!deleted) return res.status(404).json({ error: 'Attendance record not found' });
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
