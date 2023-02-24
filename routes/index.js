const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// When a wrong path is requested, this error message will be shown in Insomnia
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;