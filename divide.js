function divide(a, b) {
  return Number(a) / Number(b)
}

const result = divide(process.argv[2], process.argv[3])
console.log(result)
