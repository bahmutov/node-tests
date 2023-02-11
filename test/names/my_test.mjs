import { it } from 'node:test'
import { delay } from './utils.mjs'

it('works for 10 seconds', async () => {
  await delay()
})
