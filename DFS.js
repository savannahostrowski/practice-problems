function depthFirstSearch(root, value){
  if (root.val == value) {
    return true;
  }else {
    return (depthFirstSearch(root.right, value)) || (depthFirstSearch(root.left, value));
  }
  return false;
}

var tree = {
  val: 2,
  right : {
    val: 3,
    right: {
      val:6
    },
    left: {
      val:5
    }
  },
  left: {
    val: 10,
    right: {
      val:20
    }
  }
}
