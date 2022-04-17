module.exports = (req, res) => {
  const { salary = 0, base = 0 } = req.query
  try {
    if (isNaN(salary) || isNaN(base)) {
      throw ('a or b must be number')
    }
    res.send(gets(salary, base))
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
    return salary + self * 0.12
}
