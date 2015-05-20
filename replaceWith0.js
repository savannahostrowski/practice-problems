//Write an algorithm such that if an element in an MxN matrix
// is 0, its entire row and column is set to 0.

function replaceWith0(matrix) {
    var numCols = matrix[0].length;
    var numRows = matrix.length;
    var index = [];
    // gets row
    for (var i = 0; i < numRows; i++) {
        // gets element in row
        for (var j = 0; j < numCols; j++) {
            var row = matrix[i];
            //if row element equals 0
            if (row[j] === 0) {
                //map zeros to all elements in row
                newRow = row.map(function (x) {
                    return 0;
                });
                matrix[i]= newRow;
                // adds the index to the index array
                index.push(j);
                break;
            }
        }
    }
    // iterates through each value in the index array
    for (var k = 0; k < index.length; k++) {
        // for each row in matrix
        for (var l = 0; l < numRows; l++ ) {
            var row = matrix[l];
            //sets element in column equal to 0
            row[k] = 0;
        }
    }
    console.log(matrix);
}


replaceWith0([
    [0, 1, 2, 3, 4],
    [1, 0, 3, 4, 5],
    [2, 3, 4, 5, 6]
]);
