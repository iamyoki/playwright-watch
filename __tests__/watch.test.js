// const watch = require('../lib/watch');
const watch = jest.createMockFromModule('../lib/watch')

it('should be called', ()=>{
  watch()
  expect(watch).toHaveBeenCalled()
})

it('should be called with params', ()=>{
  const params = ['**/*.*(test|spec).(js|ts|mjs)', 'echo changed']
  watch(...params)
  expect(watch).toHaveBeenCalledWith(...params)
})
