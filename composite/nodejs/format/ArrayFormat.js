const { RuleType, RuleStatus, RuleValueType, RuleCacheKey} = require('../../../constant/rule');
const BaseFormat = require('./BaseFormat');

class ArrayFormat extends BaseFormat{

    constructor(formatJson) {
        super(formatJson);
        this.elements = null;
    }

    /**
     * 添加子元素格式
     * @param {*} format 
     */
    addElement(format) {
        if( !(format instanceof BaseFormat) ) {
            return false;
        }

        this.elements = format;
        return true;
    }

    /**
     * 检查数据是否符合该格式
     * @param {*} data 
     */
    check(data) {
        // 检查data类型
        if(! Array.isArray(data)){
            return false;
        }

        // 检查data中值类型
        for(var i in data) {
            if( !this.elements.check(data[i]) ) {
                return false;
            }
        }

        return true;
    }

    /**
     * 转换成json对象
     */
    toJson() {
        var json = super.toJson();

        json.format = this.elements.toJson();
        return json;
    }
}

module.exports = ArrayFormat;