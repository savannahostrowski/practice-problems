//Write an algorithm such that if an element in an MxN matrix
// is 0, its entire row and column is set to 0.

function replaceWith0(matrix) {
    var numCols = matrix[0].length;
    var numRows = matrix.length;
    var index;
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < numCols; j++) {
            if (matrix[i][j] === 0) {
                (matrix[i]).map(Math.sqrt);
                var index = j;
            }
        }
    }
    if (index != undefined) {
        for (var i = 0; i < numRows; i++) {
            matrix[i][index] = 0;
        }
    }
    console.log(matrix);
}


replaceWith0([
    [0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 6]
]);
