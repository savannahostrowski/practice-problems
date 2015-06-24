class linkedListNode:
    def __init__(self, data):
        self.data = data
        self.next = None

class linkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        
    def append (self, data):
        newNode = linkedListNode(data)
        if self.head == None:
            self.head == newNode
        else:
            self.tail.next = newNode
            
    def prepend (self, data):
        newNode = linkedListNode(data)
        if self.head == None:
            self.head = newNode
        else:
            tmp = self.head
            self.head = newNode
            self.head.next = tmp
    def search (self, key):
        currentNode = head
        while currentNode is not Node:
            if currentNode.data == key:
                return 'key has been found'
            currentNode = currentNode.next
        return 'not found'
    
    def traversal(self):
        currentNode = head
        while currentNode is not None:
            print (currentNode.data)
            currentNode = currentNode.next
    def remove(self, key):
        currentNode = head
        prevNode = None
        while currentNode is not None:
            if currentNode.data == key:
                tmp = 

            prevNode = currentNode
            currentNode = currentNode.next



lst = linkedList()
lst.append(1)
lst.append(2)
lst.append(3)
lst.prepend(4)
lst.traversal()

