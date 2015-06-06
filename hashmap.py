class E:
    def __init__(self, key, value):
        self.key = key
        self.value = value

class HashMap:
    def __init__(self, hashmap):
        self.hashmap = [None] * 7

    def hash(self, key):
        return key % len(self.hashmap)
    
    def set(self, key, value):
        index = self.hash(key)
        i = 0
        while i < len(self.hashmap) and self.hashmap[(index + i) % len(self.hashmap)] is not None:
            i += 1
        self.hashmap[index + i] = E(key, value)

    def get(self, key):
        index = self.hash(key)
        i = 0
        while True:
            if i >= len(self.hashmap):
                break
            j = (index + i) % len(self.hashmap)
            if self.hashmap[j] is None:
                raise KeyError('Not found')
            if self.hashmap[j].key == key:
                return self.hashmap[j].value
            i += 1
