import test from 'ava'

test('fails objects on purpose', (t) => {
  const person = { name: { first: 'Joe' } }
  t.deepEqual(person, { name: { first: 'Anna' } }, 'people')
})
