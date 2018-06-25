## Composite

This pattern provides a simple way to describe _**tree-like**_ structures, for example, menu which has sub-menus \(nodes\) and menu items \(leaves\). It helps us to characterize the relationship between the whole and the part.

The example of menu is implemented by _Head First Design Patterns,  O'Reilly_. Here, we have another example from work. In order to make further configurable processing possible , we need to describe the structure of data returned by HTTP interfaces, which is a json string.

```js
{
    data: {
        details: [{
            name: "Ben",
            avgScore: 90.0,
            list: [{
                date: "2017-06-05",
                score: 85
            },{
                date: "2018-06-05",
                score: 95
            }]
        }, {
            name: "Scott",
            avgScore: 95.0,
            list: [{
                date: "2017-06-05",
                score: 95
            },{
                date: "2018-06-05",
                score: 95
            }]
        }],
        count: 2,
        comment: "score list"
    }
}
```

In the above example, we define the following _**format**_ which can describe it. The keyword _**type**_ refers to the value type for the _**key**_. And The field _**format**_ defines the structure of the value, which is recursively. It only appears necessarily when the value type is _object_ or _array_. If the value is an object, we define the key-value pairs in the field _**format**_. Otherwise, we just assume that the structures of items in _array_ are the same.

```js
const format = {
    key: "data",
    type: "object"
    format: [
        {
            key: "details",
            type: "object"
            format: [
                {
                    key: "name",
                    type: "string"
                },
                {
                    key: "avgScore",
                    type: "float"
                },
                {
                    key: "list",
                    type: "array",
                    format: {
                        type: "object",
                        format: [
                            {
                                key: "date",
                                type: "string"
                            },
                            {
                                key: "score",
                                type: "int"
                            }
                        ]
                    }
                }
            ],
        },
        {
            key: "count",
            type: "int"
        },
        {
            key: "comment",
            type: "string"
        }
    ]
};
```



