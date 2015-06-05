class E:
    def __init__(self, key, value):
        self.key = key
        self.value = value

class HashMap:
    def __init__(self, hashmap):
        self.hashmap = [None] * 7

    def hash(self, key):
        pass

    def get(self, key):
        pass

    def set(self, key, value):
        index = self.hash(key)
        self.hashmap[index] = E(key, value)
