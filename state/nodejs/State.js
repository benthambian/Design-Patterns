class State {

    claim(worksheet){
        throw "Not Supported Under Current State"
    }

    deal(worksheet) {
        throw "Not Supported Under Current State"
    }

    close(worksheet) {
        throw "Not Supported Under Current State"
    }
}

module.exports = State;