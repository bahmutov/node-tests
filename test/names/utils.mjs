export const delay = (ms = 10_000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
