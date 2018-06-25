class BaseFormat{

    constructor(formatJson) {
        this.id = formatJson.id;
        this.key = formatJson.key;
        this.type = formatJson.type;
        this.desc = formatJson.desc;
        this.necessary = formatJson.necessary || false;
    }

    /**
     * 检查数据是否符合该格式
     * @param {*} data 
     */
    check(data) {}

    /**
     * 转换成json对象
     */
    toJson() {
        var json = {
            id: this.id,
            key: this.key,
            type: this.type,
            necessary: this.necessary,
            desc: this.desc
        };

        return json;
    }

    static getUniqueId()
    {
        let time = parseInt(new Date().getTime());
        let random = parseInt(Math.random()*1000000);
        time = time + random;
        return time;
    }

}

module.exports = BaseFormat;