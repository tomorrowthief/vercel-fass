module.exports = (req, res) => {
  const { salary = 0, base = 0 } = req.query
  try {
    if (isNaN(Number(salary)) || isNaN(Number(base))) {
      throw ('a or b must be number')
    }
    res.send(gets(Number(salary), Number(base)))
  } catch (err) {
    res.send(err)
  }
}

function gets (salary, base = 0) {
    let self = 0
    if (base > 0) {
        self = base
    } else if (salary >= 30000) {
        self = 30000
    } else {
        self = salary
    }
    return Number(salary) + Number(self) * 0.12
}
