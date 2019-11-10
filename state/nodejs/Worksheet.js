const StateFactory = require("./StateFactory")

class Worksheet {

    constructor(state) {
        this.owner = null
        this.state = state
        this.objPreState = null
        this.objCurrentState = StateFactory.create(this.state);
    }

    moveState(stateObj) {
        this.objPreState = this.objCurrentState
        this.objCurrentState = stateObj
    }

    claim(who) {
        this.objCurrentState.claim(this)
        this.owner = who
        this.updateDB()
    }

    deal() {
        this.objCurrentState.deal(this)
        this.updateDB()
    }

    close() {
        this.objCurrentState.close(this)
        this.updateDB()
    }

    updateDB() {
        this.state = StateFactory.getCode(this.objCurrentState)
        console.log("update data of the worksheet in database")
    }
}

module.exports = Worksheet;