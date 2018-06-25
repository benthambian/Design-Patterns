const { ValueType } = require('./types');
const BaseFormat = require('./BaseFormat');

class SimpleFormat extends BaseFormat{

    constructor(formatJson) {
        super(formatJson);

        if(! [ValueType.String, ValueType.Int, ValueType.Bool, ValueType.Float].includes(this.type)) {
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
            case ValueType.String:
                if(curType == this.type) result = true;
                break;
            case ValueType.Bool:
                if(curType == 'boolean') result = true;
                break;
            default:
                if (curType == 'number') {
                    if(this.type == ValueType.Int 
                        && Number.isInteger(data) 
                        || this.type == ValueType.Float)
                    {
                        result = true;
                    }
                }
        }

        return result;
    }
}

module.exports = SimpleFormat;