const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const { Page } = require('../models');
const wikipage = require('../views/wikipage')
// const { addPage } = require('../views')

//routes
router.get('/', (req, res, next) => {
    res.send('All pages')
})



router.post('/', async (req, res, next) => {

    const page = new Page({
        title: req.body.title,
        content: req.body.content,
    })
    console.log(page)
    try {
        await page.save();
        res.redirect('/');
    } catch (error) { next(error) }
})

router.get('/add', (req, res) => {
    res.send(addPage())
})

router.get('/:slug', async (req, res) => {
    const thePage = await Page.findOne({
        where: {
            slug: req.params.slug
        }
    })
    res.json(wikipage(thePage))
})

module.exports = router;
