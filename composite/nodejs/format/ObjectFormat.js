const { RuleType, RuleStatus, RuleValueType, RuleCacheKey} = require('../../../constant/rule');
const BaseFormat = require('./BaseFormat');

class ObjectFormat extends BaseFormat{

    constructor(formatJson) {
        super(formatJson);
        this.elements = {};
    }

    /**
     * 添加子元素格式
     * @param {*} format 
     */
    addElement(format) {
        if( !(format instanceof BaseFormat) || format.key == undefined) {
            return false;
        }

        this.elements[format.key] = format;
        return true;
    }

    /**
     * 检查数据是否符合该格式
     * @param {*} data 
     */
    check(data) {
        // 检查data类型
        if(! data instanceof Object || Array.isArray(data)){
            return false;
        }

        // 检查data中值类型
        for(var key in data) {
            if(this.elements.hasOwnProperty(key) && !this.elements[key].check(data[key])) {
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

        json.format = [];
        for (var key in this.elements) {
            json.format.push(this.elements[key].toJson());
        }
        return json;
    }

}

module.exports = ObjectFormat;