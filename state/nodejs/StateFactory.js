const StateOpen = require("./StateOpen")
const StateClaimed = require("./StateClaimed")
const StateClosed = require("./StateClosed")
const StateCode = {
    StateOpen: 0,
    StateClaimed: 1,
    StateClosed: 2,
}

class StateFactory {
    static create(code) {
        var state = null;
        switch (code) {
            case StateCode.StateOpen:
                state = new StateOpen();
                break;
            case StateCode.StateClaimed:
                state = new StateClaimed();
                break;
            case StateCode.StateClosed:
                state = new StateClosed();
                break;
            default:
                break;
        }
        return state;
    }

    static getCode(state) {
        var t = state.constructor.name;
        if (StateCode.hasOwnProperty(t)) {
            return StateCode[t];
        }

        throw "State Not Found!"
    }
}

module.exports = StateFactory