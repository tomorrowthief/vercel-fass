module.exports = (req, res) => {
  const { a = 1, b = 2 } = req.query
  try {
    res.send(Number(a) + Number(b))
  } catch {
    res.send('a or b must be number')
  }
}
