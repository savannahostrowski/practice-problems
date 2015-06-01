function pairsInList(lst) {
  var d = {};
  var pairs = 0;
  for (var i = 0; i < A.length; ++i){
    if (d[A[i]] === undefined) {
      d[A[i]] = 1;
    } else {
      d[A[i]] += 1;
    }
  }
    for (var key in d) {
      val = d[key];
      if (val > 1) {
        pairs += choose(val, val - 1);
        console.log(val, pairs);
      }
    }
    console.log(pairs);
  }

function choose(n, d) {
  var top = 1;
  for (var i = d - 1; i >= 0; --i) {
    top *= n - i;
    }
  var bottom = 1;
  for(var i = d; i >= 1; --i) {
    bottom *= i;
    }
    return top/bottom;
}
