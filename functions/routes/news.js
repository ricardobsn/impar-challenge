const { Noticia } = require('../models/noticia');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    const newsList = await Noticia.find();

    if (!newsList) {
        res.status(500).json({ success: false })
    }

    res.status(200).send(newsList);
})

router.get('/:id', async (req, res) => {
    const news = await Noticia.findById(req.params.id);

    if (!news) {
        res.status(500).json({ message: "Notícia não encontrada" })
    }

    res.status(200).send(news);
})

router.delete('/:id', (req, res) => {
    Noticia.findByIdAndRemove(req.params.id).then((news) => {
        if (news) {
            return res.status(200).json({
                success: true, message: "Notícia deletada"
            })
        } else {
            return res.status(404).json({
                success: false, message: "Notícia não encontrada"
            })
        }
    }).catch((error) => {
        return res.status(400).json({
            success: false, error: error
        })
    })

})

router.put('/:id', async (req, res) => {
    const news = await Noticia.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        description: req.body.description,
        uf: req.body.uf,
        city: req.body.city,
        dateNews: req.body.dateNews,
        aproved: req.body.aproved,
        rejected: req.body.rejected,
    },
        { new: true })

    if (!news)
        return res.status(404).send('Notícia não foi atualizada')

    res.send(news);

})

router.put('/get/aprovetion/:id', async (req, res) => {
    const news = await Noticia.findByIdAndUpdate(req.params.id, {
        aproved: true
    },
        { new: true })

    if (!news)
        return res.status(404).send('Notícia não foi atualizada')

    res.send(news);

})
router.put('/get/rejection/:id', async (req, res) => {
    const news = await Noticia.findByIdAndUpdate(req.params.id, {
        rejected: true
    },
        { new: true })

    if (!news)
        return res.status(404).send('Notícia não foi rejeitada')

    res.send(news);

})

router.post('/', async (req, res) => {

    let news = new Noticia({
        title: req.body.title,
        description: req.body.description,
        uf: req.body.uf,
        city: req.body.city,
        dateNews: req.body.dateNews
    })
    news = await news.save();

    if (!news)
        return res.status(404).send('Notícia não foi criada')

    res.send(news);
})

router.get('/get/aprovetion', async (req, res) => {
    const status = await Noticia.find({ aproved: false })

    if (!status) {
        res.status(500).json({ success: false })
    }

    res.send(status);
})

router.get('/get/rejected', async (req, res) => {
    const status = await Noticia.find({ rejected: true })

    if (!status) {
        res.status(500).json({ success: false })
    }

    res.send(status);
})


module.exports = router;
