const indexController = (req, res, next) => {
  res.status(200).json({
    id: 1,
    name: "Albert Einstein",
    Invention: "Theory of Relativity",
  });
};

module.exports = {
  indexController,
};
