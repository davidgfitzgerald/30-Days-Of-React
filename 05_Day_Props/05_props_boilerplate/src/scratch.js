function commaFormattedNumber(number) {
  return number.toString().split("").reverse().reduce((acc, curr, ind)=>{
    if (ind > 0 && ind % 3 === 0) acc = "," + acc
    return curr + acc
  }, "")
}

console.log(commaFormattedNumber(1))
console.log(commaFormattedNumber(13))
console.log(commaFormattedNumber(135))
console.log(commaFormattedNumber(1356))
console.log(commaFormattedNumber(13567))
console.log(commaFormattedNumber(135671))
console.log(commaFormattedNumber(1356717))
console.log(commaFormattedNumber(13567178))
console.log(commaFormattedNumber(135671789))