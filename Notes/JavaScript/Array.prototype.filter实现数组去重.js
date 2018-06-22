const arr = [1, 2, 3, 3, 2, 1]
const trans = (_arr => _arr.filter((v, i) => _arr.indexOf(v) === i))
const arr2 = trans(arr) // [1, 2, 3]