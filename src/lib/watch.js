const chokidar = require('chokidar')
const { spawn } = require('child_process')

const presetIgnorePaths = ['!node_modules']

/** @type {import('child_process').ChildProcess} */
let child

const runCommand = (command) => {
  console.log('================================================')
  spawn(command[0], command.slice(1), {
    stdio: 'inherit',
  })
}

function watch(paths, command) {
  paths = [paths].flat()
  chokidar.watch([...paths, ...presetIgnorePaths]).on('all', function launch() {
    /* 
      2. kill prev child if child hasn't been closed by itself
      3. remove all previous listeners to prevent running 
            if child hasn't been closed by itself 
            and new round triggered
    */
    const killedPrevRunning = child?.kill()
    child?.removeAllListeners()
    if (killedPrevRunning) {
      /* 
        4. if successfully killed prev child process, run new round after on close
      */
      child.on('close', () => {
        child = runCommand(command)
      })
    } else {
      /* 
        1. run command to create child when initial
        5. run command to create child when chil closed by itself
      */
      child = runCommand(command)
    }
  })
}

module.exports = watch
