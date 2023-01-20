const router = require('express').Router();

router.get('/', async (req,res) => {
    try {
        res.render('main-dash', {
            layout: 'dashboard',
        });
    } catch (err) {
        res.redirect('login');
    }
});

module.exports = router;