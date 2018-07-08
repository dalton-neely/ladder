const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on('line', input => {
    str = input.split(' ').map(e => parseInt(e,10))
    console.log(Math.ceil(str[0]/Math.sin(str[1]*(Math.PI/180))))
    rl.close()
})