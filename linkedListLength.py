class node:
    def __init__(self, item):
        self.item = item
        self.next = None
    def __str__(self):
        return str(self.item)

          
one = node("dalton")
two = node("dalton")
three = node("hudak")
four = node("dalton")

one.next = two
two.next = three
three.next = four

def lenLL(lst):
    length = 0
    current = lst
    while current is not None:
        length += 1
        current = current.next
    return length

print(lenLL(one))
