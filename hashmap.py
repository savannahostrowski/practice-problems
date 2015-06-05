class HashMapEntry:
    def __init__(self, key, value):
        self.key = key
        self.value = value

class HashMap:
    def __init__(self, hashmap):
        self.hashmap = []
    def __get__(self, key):
        entry = HashMapEntry.key
        for 
    def __set__(self, key, value):
        entry = HashMapEntry.key
        assert entry not in self.hashmap, "The key is already used in this hashmap"
        newEntry = HashMapEntry(key,value)
        self.hashmap.append(newEntry)
