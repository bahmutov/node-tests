import { it } from 'mocha'
import { expect } from 'chai'

it('fails objects on purpose', (t) => {
  const person = { name: { first: 'Joe' } }
  expect(person).to.deep.equal({ name: { first: 'Anna' } })
})
