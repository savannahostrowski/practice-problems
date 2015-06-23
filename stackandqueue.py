class Queue:
    def __init__ (self):
        self.items = []
    def enqueue(self, item):
        self.items.append(item)
    def dequeue (self):
        if len(self.items) == 0: return
        return self.items.pop(0)
    def size (self):
        return len(self.items)
    def __str__(self):
        return str(self.items)
class Stack:
    def __init__(self):
        self.items = []
    def push (self, item):
        self.items.append(item)
    def pop(self):
        if len(self.items) == 0: return
        return self.items.pop()
    def size (self):
        return len(self.items)
    def __str__(self):
        return str(self.items)


        
    
        
