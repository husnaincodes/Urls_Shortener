const Url = require('../models/Url');
const shortid = require('shortid');

exports.createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortCode = shortid.generate();
    const baseUrl = process.env.BASE_URL || `http://localhost:5000`;
    const url = new Url({ originalUrl, shortCode });
    await url.save();
    res.json({ shortUrl: `${baseUrl}/${shortCode}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const { code } = req.params;
    const url = await Url.findOne({ shortCode: code });
    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      return res.status(404).json('Not found');
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAnalytics = async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};