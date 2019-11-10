const BaseState = require("./State")
const StateClaimed = require("./StateClaimed")
const StateClosed = require("./StateClosed")

class StateOpen extends BaseState{
    claim(worksheet) {
        var state = new StateClaimed()
        worksheet.moveState(state)
    }

    close(worksheet) {
        var state = new StateClosed()
        worksheet.moveState(state)
    }
}

module.exports = StateOpen;