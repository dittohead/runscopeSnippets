//runscope
//check field ability in json

var totalItemsCount = variables.get('totalItemsCount');
if (totalItemsCount > 0) {
    var exists = false;
    var data=JSON.parse(response.body);
    for (var id in totalItemsCount){
        if (data.result.items[id].is_founded !== 0){
            exists=true;
            log(id);
            break;
        }
    }
    assert.ok(exists, "bromance found");
}