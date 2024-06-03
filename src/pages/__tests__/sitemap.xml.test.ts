import { GET } from '../sitemap.xml'

let lines: string[]

beforeEach(async () => {
  if (lines) return
  const response = await GET()
  const body = await response.text()
  lines = body.split('\n')
})

test('has data', async () => {
  expect(lines).toContain('<url><loc>https://cheetsheet.hhf.co.in/react</loc></url>')
  expect(lines).toContain('<url><loc>https://cheetsheet.hhf.co.in/bash</loc></url>')
})

test('skip unlisted sheets', async () => {
  expect(lines).not.toContain(
    '<url><loc>https://cheetsheet.hhf.co.in/tests/basic</loc></url>'
  )
})
