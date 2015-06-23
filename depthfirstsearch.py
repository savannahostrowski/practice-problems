class _BinTreeNode :
    def __init__( self, data ):
        self.data = data
        self.left = None
        self.right = None

D = _BinTreeNode('D')
B = _BinTreeNode('B')
F = _BinTreeNode('F')


D.left = B
D.right = F

def preorderDFS(subtree):
    if subtree is not None:
        print(subtree.data)
        preorderDFS(subtree.left)
        preorderDFS(subtree.right)

def postorderDFS(subtree):
    if subtree is not None:
        postorderDFS(subtree.left)
        postorderDFS(subtree.right)
        print(subtree.data)

def inorderDFS(subtree):
    if subtree is not None:
        inorderDFS(subtree.left)
        print(subtree.data)
        inorderDFS(subtree.right)
        
print(preorderDFS(D))
print(postorderDFS(D))
print(inorderDFS(D))
