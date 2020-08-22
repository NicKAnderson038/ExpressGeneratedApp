const chalk = require('chalk')
const cTable = require('console.table')
const log = console.log
const table = cTable.getTable([
  {
    name: 'foo',
    age: 10,
  },
  {
    name: 'bar',
    age: 20,
  },
])

// console.table wont function correctly with chalk. However, the console.table npm library works.
console.table([
  {
    name: 'foo',
    age: 10,
  },
  {
    name: 'bar',
    age: 20,
  },
])
module.exports.terminal = ({ message, code }) => {
  log(chalk.blue('Hello') + ' World' + chalk.red('!\n'))
  log(chalk.yellow(table))
  // Compose multiple styles using the chainable API
  if (code === 400) {
    log(chalk.yellow.bgRed.bold(message))
  } else if (code === 200) {
    log(chalk.yellow.bgGreen.bold(message))
  }
  // Nest styles
  log(chalk.red('Hello', `${chalk.underline.bgBlue('world')}!`))

  // Nest styles of the same type even (color, underline, background)
  log(
    chalk.green(
      `I am a green line ${chalk.blue.underline.bold(
        'with a blue substring'
      )} that becomes green again!`
    )
  )

  // ES2015 template literal
  log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`)

  // Use RGB colors in terminal emulators that support it.
  log(chalk.keyword('orange')('Yay for orange colored text!'))
  log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'))
  log(chalk.hex('#DEADED').bold('Bold gray!\n'))
}
