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

def numSameVotesInARow(votes):
    num = 0
    current = votes
    while current.next is not None:
        if current.item == current.next.item:
            num += 1
        current = current.next
    return num
