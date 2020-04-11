const express = require("express");
const users = require("./db");
const posts = require("./seeds/01-posts");
const comments = require("./seeds/02-comments");

const router = express.Router();

router.get("/", (req, res) => {
  users
    .find(req.query)
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error connecting to server",
      });
    });
});

router.get("/:id", (req, res) => {
  users
    .findById(req.params.id)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error connecting to server",
      });
    });
});

router.get("/:id/comments", (req, res) => {
  users
    .findCommentById(req.params.id)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error connecting to server",
      });
    });
});

router.get("/comments", (req, res) => {
  users
    .findPostComments(req.params.postId)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "could not find Comments",
      });
    });
});

router.post("/", (req, res) => {
  users
    .insert(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error adding user",
      });
    });
});

router.post("/:id/comments", (req, res) => {
  users
    .insertComment(req.body)
    .then((comments) => {
      res.status(201).json(comments);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Could not Add the Comment",
      });
    });
});

router.delete("/:id", (req, res) => {
  users
    .remove(req.params.id)
    .then(() => {
      res.json();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "No such post exists",
      });
    });
});

module.exports = router;
