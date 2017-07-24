const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const count = require("./count")

rl.question("Enter text: ", answer => {
  let textLength = count.calc(answer)

  if (textLength === 1) {
    console.log(`'${answer}' has ${textLength} character.`)
  } else {
    console.log(`'${answer}' has ${textLength} characters.`)
  }

  rl.close()
})
