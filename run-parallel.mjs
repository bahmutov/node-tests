import { run } from 'node:test'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const files = ['another.test.mjs', 'my_test.mjs', 'test-1.mjs'].map((name) =>
  path.join(__dirname, 'names', name),
)
console.log(files)

// does not work :(
run({
  concurrency: 3,
  files,
})
