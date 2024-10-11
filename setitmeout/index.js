console.log('Hello , I am start')
setTimeout(function () {
  console.log('Hello , I am callbackFunction')
}, 5000)
console.log('Hello , I am end')

//logic - 10 sec
let startTime = new Date().getTime()
let endTime = startTime

while (endTime < startTime + 10000) {
  endTime = new Date().getTime()
}
console.log('The process is completed successfully in 10 seconds')
