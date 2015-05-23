//Write code to create a linked list

// To create a linked list
function linkedList() {
    this.head = null;
}

linkedList.prototype.push = function(val) {
    var node = {
        value: val,
        next: null
    }
    if (!this.head) {
        this.head = node;
    } else {
        var current = this.head;
        while (current.next) {
            var current = current.next;
        }
        current.next = node;
    }
}

linkedList.prototype.remove = function(val) {
    var current = this.head;
    // if the value is found in the linked list
    if (current.value == val) {
    	// make the head equal the next element
        this.head = current.next;
    } else {
        var previous = current;
        // used for val in middle or beginning of linked list
        // current.next is not null, undefined, 0 etc.
        while (current.next) {
        	// if val is found in linked list
            if (current.value == val) {
                previous.next = current.next;
                break;
            }
            var previous = current;
            var current = current.next;
        }
    }
}

var newll = new linkedList();

var numToAdd = [1, 2, 3, 4, 5, 6, 7, 8];

for (var i = 0; i < numToAdd.length; i++) {
    newll.push(numToAdd[i]);
};

