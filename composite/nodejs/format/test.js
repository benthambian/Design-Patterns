const FormatFactory = require("./FormatFactory");
const BaseFormat = require("./BaseFormat");

const formatJson = {
    id: BaseFormat.getUniqueId(),
    key: "data",
    type: "object",
    desc: "返回数据",
    format: [
        {
            id: BaseFormat.getUniqueId(),
            key: "details",
            type: "object",
            desc: "详情",
            format: [
                {
                    id: BaseFormat.getUniqueId(),
                    key: "name",
                    type: "string",
                    desc: "姓名"
                },
                {
                    id: BaseFormat.getUniqueId(),
                    key: "avgScore",
                    type: "float",
                    desc: "平均分"
                },
                {
                    id: BaseFormat.getUniqueId(),
                    key: "list",
                    type: "array",
                    desc: "记录",
                    format: {
                        id: BaseFormat.getUniqueId(),
                        type: "object",
                        desc: "数组元素",
                        format: [
                            {
                                id: BaseFormat.getUniqueId(),
                                key: "date",
                                type: "string",
                                desc: "日期"
                            },
                            {
                                id: BaseFormat.getUniqueId(),
                                key: "score",
                                type: "int",
                                desc: "分数"
                            }
                        ]
                    }
                }
            ],
        },
        {
            id: BaseFormat.getUniqueId(),
            key: "count",
            type: "int",
            desc: "总数"
        },
        {
            id: BaseFormat.getUniqueId(),
            key: "comment",
            type: "string",
            desc: "备注"
        }
    ]
};

format = FormatFactory.create(formatJson);

newFormatJson = format.toJson();

console.log(JSON.stringify(newFormatJson));