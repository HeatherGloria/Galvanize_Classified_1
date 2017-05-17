'use strict';

const express = require('express');

const router = express.Router();

router.get('/', function(req, res, next) {
  knex('classifieds')
    .select(['title', 'description', 'price', 'item_image'])
    .then(function(response) {
      res.send(response)
    })
})

router.get('/:id', function(req, res, next) {
  knex('classifieds')
    .where('id', req.params.id)
    .select(['id', 'title', 'description', 'price', 'item_image'])
    .then(function(onething) {
      res.send(onething[0])
    })
})

router.post('/', function(req, res, next) {
  knex('classifieds')
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .insert(req.body)
    .then(function(creating) {
      res.send(creating[0])
    })
})

router.patch('/:id', function(req, res, next) {
  knex('classifieds')
    .update({'description': req.body.description})
    .where('id', req.params.id)
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .then(function(edit) {
      res.send(edit[0])
    })
})

router.delete('/:id', function(req, res, next) {
  knex('classifieds')
    .where('id', req.params.id)
    .del()
    .returning(['id', 'title', 'description', 'price', 'item_image'])
    .then(function(remove) {
      res.send(remove[0])
    })
})


module.exports = router;
