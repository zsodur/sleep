const sleep = require('./index')

const test = async function() {
  console.log(1)
  await sleep(1000)
  console.log(2)
  await sleep(1000)
  console.log(3)
}

test()
