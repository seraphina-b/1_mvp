var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const db = require("../model/helper");


router.use(bodyParser.json());
 
router.get("/news", (req, res) => {
    db("SELECT * FROM saved_articles").then(results => {
        if (results.error)
            res.status(500).send(results.error);
        res.send(results.data);
    });
});

router.post("/news", (req, res) => {
    db(`INSERT INTO saved_articles(urlToImage, url, title, author, source, publishedAt, description) VALUES ("${req.body.urlToImage}", "${req.body.url}", "${req.body.title}", "${req.body.author}", "${req.body.source.name}", "${req.body.publishedAt}", "${req.body.description}");`)
     .then(results => {
        if (results.error)
            res.status(500).send(results.error);

        res.send({msg: "Successfully saved"})
    });
});

router.delete("/news/:article_id", (req, res) => {
    db(`DELETE FROM saved_articles WHERE id = ${req.params.article_id};`).then(results => {
      if (results.error) {
        res.status(500).send(results.error);
      }
      db("SELECT * FROM items ORDER BY id ASC;").then(results => {
        if (results.error) {
          res.status(500).send(results.error);
        }
        res.send(results.data);
    });
    })
  });

module.exports = router