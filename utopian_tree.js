function uTree(cycles) {
    var tree = 1;
    for (var i = 0; i < cycles; i++) {
        if (i % 2 == 0 || i == 0) {
            tree += tree;
        } else {
            tree += 1;
        }
    }
    return tree;
}
