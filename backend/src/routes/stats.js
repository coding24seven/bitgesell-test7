const express = require('express');
const fs = require('fs');
const path = require('path');
const { memoizedMean } = require('../utils/stats');
const router = express.Router();
const DATA_PATH = path.join(__dirname, '../../../data/items.json');

// GET /api/stats
router.get('/', (req, res, next) => {
  fs.readFile(DATA_PATH, 'utf-8', (err, raw) => {
    if (err) return next(err);

    const items = JSON.parse(raw);
    // Intentional heavy CPU calculation
    const stats = {
      total: items.length,
      averagePrice: memoizedMean(items)
    };

    res.json(stats);
  });
});

module.exports = router;