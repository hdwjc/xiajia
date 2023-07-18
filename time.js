let lastTimeObj = {}
let dayArr = [15, 19, 21, 28, 30, 45, 60, 70, 90, 120]

let date = new Date()
let nowYear = date.getFullYear()
let nowMonth = date.getMonth() + 1
let nowDay = date.getDate()

function calculate (day) {
  let lastTime = new Date(date - 1000 * 60 * 60 * 24 * day)
  let y = lastTime.getFullYear()
  let m = lastTime.getMonth() + 1
  let d = lastTime.getDate()

  return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d)
}

function manualCount(n) {
  let m = 0
  if (n <= 10) {
    m = 1
  } else if (n > 10 & n < 30) {
    m = 2
  } else {
    m = 3
  }

  return calculate(n - m)
}

for (let i = 0, count; i < dayArr.length; i++) {
  lastTimeObj[`day${dayArr[i]}`] = manualCount(dayArr[i])
}