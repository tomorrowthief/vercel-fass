module.exports = (req, res) => {
  const { a = 1, b = 2 } = req.query
  res.send(a + b)
}
