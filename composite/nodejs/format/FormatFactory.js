const { RuleType, RuleStatus, RuleValueType, RuleCacheKey} = require('../../../constant/rule');
const ObjectFormat          = require('./ObjectFormat');
const ArrayFormat          = require('./ArrayFormat');
const SimpleFormat          = require('./SimpleFormat');

class FormatFactory
{
    /**
     * 根据json对象构造format对象
     * @param {*} formatJson 
     */
    static create(formatJson) {
        var format = null;
        switch(formatJson.type) {
            // 数组
            case RuleValueType.Array:
                format = new ArrayFormat(formatJson);
                format.addElement(this.create(formatJson.format));
                break;

            case RuleValueType.Object:
                format = new ObjectFormat(formatJson);
                for(var i in formatJson.format) {
                    format.addElement(this.create(formatJson.format[i]));
                }
                break;
            
            case RuleValueType.Int:
            case RuleValueType.String:
            case RuleValueType.Bool:
            case RuleValueType.Float:
                format = new SimpleFormat(formatJson);
                break;
            
            default:
                break;
        }

        return format;
    }
}

module.exports = FormatFactory;