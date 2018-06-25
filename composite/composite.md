## Composite

This pattern provides a simple way to describe _**tree-like**_ structures, for example, menu which has sub-menus \(nodes\) and menu items \(leaves\). It helps us to characterize the relationship between the whole and the part.

The example of menu is implemented by _Head First Design Patterns,  O'Reilly_. Here, we have another example from work. In order to make further configurable processing possible , we need to describe the structure of data returned by HTTP interfaces which is a json string.

```
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
        }]
        count: 2,
        comment: "score list"
    }
}
```



