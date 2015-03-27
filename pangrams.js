function pangrams(s){
  lowercaseStr = s.toLowerCase();
  alphaList ='abcdefghijklmnopqrstuvwxyz'.split("");
  for (var i = 0; i < lowercaseStr.length; i++){
    for (var j = 0; j < alphaList.length; j++){
      if (lowercaseStr[i] === alphaList[j]){
        alphaList.splice(j, 1);
      }
    }
  }
  if (alphaList.length === 0){
    return "pangram";
  }else{
    return "not pangram";
  }
}