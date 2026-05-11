const express = require('express');
const router = express.Router();

const Url = require('../models/Url');

// Import controller functions
const {
  createShortUrl,
  redirectUrl,
  getAnalytics
} = require('../controllers/urlController');


// ✅ Create short URL
router.post('/shorten', createShortUrl);


// ✅ Get analytics (all URLs + clicks)
router.get('/analytics', getAnalytics);


// ✅ Clear all history
router.delete('/clear', async (req, res) => {
  try {
    await Url.deleteMany({});
    res.json({ message: 'History cleared successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to clear history' });
  }
});


// ✅ Redirect to original URL
router.get('/:code', redirectUrl);


module.exports = router;