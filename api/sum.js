module.exports = (req, res) => {
  const { a = 1, b = 2 } = req.query
  try {
    if (isNaN(a) || isNaN(b)) {
      throw ('a or b must be number')
    }
    res.send(Number(a) + Number(b))
  } catch (err) {
    res.send(err)
  }
}
