function processData(input) {
    var newList = [];
    var counter = {};
    for (var i = 0; i < input.length; ++i) {
        if (counter[input[i]] === undefined) {
            counter[input[i]] = 1;
        } else {
            counter[input[i]] += 1;
        }
    }
    for (var key in counter) {
        if (counter.hasOwnProperty(key)){
        } if (counter[key] == 1) {
                newList.push(parseInt(key));
            }
    }
    return newList;
}