import { it } from 'node:test'
import assert from 'node:assert/strict'

it('works', () => {
  assert.equal(1, 1)
})

it('fails', () => {
  assert.equal(2, 5)
})
