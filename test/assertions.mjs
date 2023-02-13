import { describe, it } from 'node:test'
import assert from 'node:assert/strict'

describe('Assertions', () => {
  // it('passes with primitives', () => {
  //   assert.equal('Hello', 'Helloz', 'greeting check')
  // })

  it('fails objects on purpose', () => {
    const person = { name: { first: 'Joe' } }
    assert.deepEqual(person, { name: { first: 'Anna' } }, 'people')
  })
})
