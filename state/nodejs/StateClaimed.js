const BaseState = require("./State")
const StateClosed = require("./StateClosed")
const Worksheet = require("./Worksheet")

class StateClaimed extends BaseState{

    deal(worksheet) {
        var state = new StateClosed()
        worksheet.moveState(state)
    }
}

module.exports = StateClaimed;