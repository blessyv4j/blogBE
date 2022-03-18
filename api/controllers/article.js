const Art = require("../models/articles");

exports.getAllArt = (req, res) => {
    Art.find()
        .then((art) => res.json(art))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "Articles not found", error: err.message })
        );
};