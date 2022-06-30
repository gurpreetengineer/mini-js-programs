let a = "i love javascript";

function reverseString(string) {
  const temp = string.split(' ')
  let result = []
  for (let i = temp.length - 1; i >= 0; i--) {
    result.push(temp[i]);
  }
  result.join(' ')

  let final_string = []

  for (let j in result) {
    let a_temp = result[j].split('')
    let x = [a_temp[0].toUpperCase()]

    for (let k = 1; k < a_temp.length; k++)
      x.push(a_temp[k])
    final_string.push(x.join(''))
  }

  const final = final_string.join(' ')
  return final
}

reversed = reverseString(a)
// console.log(reversed)


function hello() {
  let a = []
  a[50] = "aaa";

  console.log(a.length, a[0])
}

hello()