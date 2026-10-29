const express = require('express');
const { Course } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		res.json(await Course.findAll());
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const course = await Course.findByPk(req.params.id);
		if (!course) return res.status(404).json({ error: 'Course not found' });
		res.json(course);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.post('/', async (req, res) => {
	try {
		res.status(201).json(await Course.create(req.body));
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.put('/:id', async (req, res) => {
	try {
		const course = await Course.findByPk(req.params.id);
		if (!course) return res.status(404).json({ error: 'Course not found' });
		await course.update(req.body);
		res.json(course);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const deleted = await Course.destroy({ where: { id: req.params.id } });
		if (!deleted) return res.status(404).json({ error: 'Course not found' });
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;
