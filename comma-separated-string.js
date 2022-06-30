dummy = "i am a developer"

let empty_array = []
let new_string = ""

for (let i in [...Array(dummy.length)]) {
  if (dummy[i] !== ' ') {
    empty_array.push(dummy[i])
  }

  empty_array.join(',')

}
for (let j in empty_array) {
  a = (Number(j) === empty_array.length - 1) ? "" : ","
  new_string += empty_array[j] + a
}
console.log('result', String(new_string), '\n')
