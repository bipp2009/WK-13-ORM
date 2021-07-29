const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product]
  }).then((cats) => {
    res.json(cats)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findAll({
    where: {
      id: req.params.id
    },
    include: [Product]
  }).then((cats) => {
    res.json(cats)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body).then((cat) => {
    res.json(cat)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  }).then((cat) => {
    res.json(cat)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((cat) => {
    res.json(cat)
  })
});

module.exports = router;
