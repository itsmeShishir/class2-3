//array and object destruct
let a = [1, 2, 4]
let [b, c, d] = a
console.log(b)
console.log(c)
console.log(d)
console.log(a)

let details = { name: "shishir", age: "26" }
console.log(details)

const {name, age} = details;
console.log(name)
console.log(age)

let maps = new Map();
maps.set(4, 'abc')
maps.set(5,"one valuye")
// maps = {
//   "1": "1",
//   2: "a",
//   names: "shishir"
// }
console.log(typeof(maps))
console.log(maps)
console.log(maps.get(5
))

maps.clear()
console.log(maps)

