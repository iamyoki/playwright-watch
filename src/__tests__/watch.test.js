// const watch = require('../lib/watch');
const watch = require('../lib/watch')
const chokidar = require('chokidar')
const childProcess = require('child_process')

jest.spyOn(chokidar, 'watch')
jest.mock('child_process')

it('should be called', () => {
  watch()
  expect(watch).toHaveBeenCalled()
})

it.only('should be called with params', () => {
  const paths = ['**/*.*(test|spec).(js|ts|mjs)']
  const command = ['echo', '123']

  const onCallback = jest.fn()
  const emitCallback = jest.fn()

  chokidar.watch.mockReturnValue({
    on: onCallback,
    emit: emitCallback,
  })

  watch(paths, command)
  expect(chokidar.watch).toHaveBeenCalledWith(paths.concat('!node_modules'))

  expect(onCallback.mock.calls[0][0]).toBe('all')
  onCallback.mock.calls[0][1]()

  expect(childProcess.spawn).toHaveBeenCalledWith(
    command[0],
    command.slice(1),
    {
      shell: process.platform === 'win32',
      stdio: 'inherit',
    }
  )
})
