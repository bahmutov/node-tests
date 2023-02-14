import { it } from 'node:test'
import assert from 'node:assert/strict'

type Person = {
  name: string
}

it('subtest 1', () => {
  console.log('testing the person')
  const p: Person = {
    name: 'Joe',
  }
  assert.deepEqual(p, { name: 'Joe' })
})
