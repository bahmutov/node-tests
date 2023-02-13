import test from 'ava'

test('passes with primitives', (t) => {
  t.is('Hello', 'Helloz', 'greeting check')
})

test('fails objects on purpose', (t) => {
  const person = { name: { first: 'Joe' } }
  t.deepEqual(person, { name: { first: 'Anna' } }, 'people')
})
