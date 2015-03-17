var word1 = "lionoil"

function palindrome(word) {
    charlist = word.split('');
    reverse_list = charlist.reverse();
    if (charlist == reverse_list) {
        return true;
    } else {
        return false;
    }
}

function palindromeAlt(word) {
    charlist = word.split(''); // returns list of char
    console.log(charlist);
    if (charlist[0] != charlist[charlist.length - 1]) {
        return false;
    } else if (charlist.length == 1) {
        return true;
    } else {
        charlist.shift();
        charlist.pop();
        return palindromeAlt(charlist.join(''));
    }
}

function palindromeAlt2(word){
    length = word.length;
    start = 0;
    end = length - 1
    for (var i = 0; i < charlist.length; i++){
        console.log(word.charAt(i));
        console.log(word.charAt(length-i));
        if (word.charAt(i) !== word.charAt(length - i)){
            return false;
        }
        else {
            return true;
        }
    }

