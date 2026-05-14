const Url = require('../models/Url');
const shortid = require('shortid');

exports.createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  const shortCode = shortid.generate();

  const url = new Url({ originalUrl, shortCode });
  await url.save();

  res.json({ shortUrl: `http://localhost:5000/${shortCode}` });
};

exports.redirectUrl = async (req, res) => {
  const { code } = req.params;

  const url = await Url.findOne({ shortCode: code });

  if (url) {
    url.clicks++;
    await url.save();
    return res.redirect(url.originalUrl);
  } else {
    return res.status(404).json('Not found');
  }
};

exports.getAnalytics = async (req, res) => {
  const urls = await Url.find();
  res.json(urls);
};