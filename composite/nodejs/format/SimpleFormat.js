const { RuleType, RuleStatus, RuleValueType, RuleCacheKey} = require('../../../constant/rule');
const BaseFormat = require('./BaseFormat');

class SimpleFormat extends BaseFormat{

    constructor(formatJson) {
        super(formatJson);

        if(! [RuleValueType.String, RuleValueType.Int, RuleValueType.Bool, RuleValueType.Float].includes(this.type)) {
            throw "Type Not Supported";
        }
    }

    /**
     * 检查数据是否符合该格式
     * @param {*} data 
     */
    check(data) {
        var curType = typeof data;
        var result = false;
        switch(this.type) {
            case RuleValueType.String:
                if(curType == this.type) result = true;
                break;
            case RuleValueType.Bool:
                if(curType == 'boolean') result = true;
                break;
            default:
                if (curType == 'number') {
                    if(this.type == RuleValueType.Int && Number.isInteger(data) || this.type == RuleValueType.Float) {
                        result = true;
                    }
                }
        }

        return result;
    }
}

module.exports = SimpleFormat;