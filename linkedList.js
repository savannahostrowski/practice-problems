//Write code to create a linked list

// To create a linked list
function linkedList() {
	this.head = null;
}

linkedList.prototype.push = function (val) {
	var node = {
		value:val, 
		next:null
	}
	if (!this.head) {
		this.head = node;
	}
	else {
		current = this.head;
		while (current.next) {
			current = current.next;
		}
		current.next = node;
	}
}

var newll = new linkedList();


var numToAdd = [1,2,3,4,5,6,7,8];

for (var i = 0; i < numToAdd.length; i++) {
	newll.push(numToAdd[i]);
};
