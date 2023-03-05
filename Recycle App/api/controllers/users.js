const express = require("express");
const router = express.Router();
const db = require("../models");
const { User } = db;


router.get("/", (req, res) => {
    
    User.findAll({}).then((allUsers) => res.json(allUsers));
    
});

router.post("/", (req, res) => {
    let { content } = req.body;
  
    User.create({ content })
      .then((newPost) => {
        res.status(201).json(newPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  router.get("/:id", (req, res) => {
    const { id } = req.params;
    User.findByPk(id).then((mpost) => {
      if (!mpost) {
        return res.sendStatus(404);
      }
  
      res.json(mpost);
    });
  });

  router.delete("/:id", (req, res) => {
    const { id } = req.params;
    User.findByPk(1).then((mpost) => {
      if (!mpost) {
        return res.sendStatus(404);
      }
  
      mpost.destroy();
      res.sendStatus(204);
    });
  });

  
  


  router.put("/:id", (req, res) => {
    const { id } = req.params;
    User.findByPk(id).then((mpost) => {
      if (!mpost) {
        return res.sendStatus(404);
      }
  
      mpost.content = req.body.content;
      mpost
        .save()
        .then((updatedPost) => {
          res.json(updatedPost);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    });
  });

module.exports = router;