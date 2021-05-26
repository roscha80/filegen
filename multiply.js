function multiply(a, b) {
  return Number(a) * Number(b)
}

const result = multiply(process.argv[2], process.argv[3])
console.log(result)
