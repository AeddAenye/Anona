const { format } = require('date-fns')

function DateNow() {
    return format(new Date(), 'yyyy-MM-dd HH:mm:ss')
}

module.exports = DateNow