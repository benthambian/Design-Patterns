const { ValueType } = require('./types');
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
            case ValueType.Array:
                format = new ArrayFormat(formatJson);
                format.addElement(this.create(formatJson.format));
                break;

            case ValueType.Object:
                format = new ObjectFormat(formatJson);
                for(var i in formatJson.format) {
                    format.addElement(this.create(formatJson.format[i]));
                }
                break;
            
            case ValueType.Int:
            case ValueType.String:
            case ValueType.Bool:
            case ValueType.Float:
                format = new SimpleFormat(formatJson);
                break;
            
            default:
                break;
        }

        return format;
    }
}

module.exports = FormatFactory;