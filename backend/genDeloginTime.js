const { format } = require('date-fns')

function genDeloginTime() {
  return format(new Date().setDate(new Date().getDate() + 5), 'yyyy-MM-dd hh:mm:ss')
}

module.exports = genDeloginTime

