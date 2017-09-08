import { configureStore } from './configureStore'

describe('configureStore()', () => {
  it('should return a store', () => {
    const store = configureStore()

    expect(store).toBeTruthy()
  })
})
