module.exports = (req, res) => {
  console.log(req)

  res.send(`prismic param: ${JSON.stringify(req.body)}`)
}