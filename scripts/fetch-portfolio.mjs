import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const username = process.env.PORTFOLIO_USERNAME?.trim().toLowerCase()
if (!username) {
  throw new Error("PORTFOLIO_USERNAME is not set")
}

const origin = (process.env.PORTFOLIO_API_ORIGIN ?? "http://localhost:3000").replace(
  /\/$/,
  "",
)
const url = `${origin}/api/portfolio/${encodeURIComponent(username)}`

const cardFields = ["role", "company", "url", "location", "dates"]

function assertCard(value, index) {
  if (!value || typeof value !== "object") {
    throw new Error(`experience[${index}] must be an object`)
  }
  for (const field of cardFields) {
    if (typeof value[field] !== "string" || value[field].trim() === "") {
      throw new Error(`experience[${index}].${field} must be a non-empty string`)
    }
  }
  if (
    !Array.isArray(value.highlights) ||
    value.highlights.some((highlight) => typeof highlight !== "string")
  ) {
    throw new Error(`experience[${index}].highlights must be an array of strings`)
  }
}

const response = await fetch(url)
if (!response.ok) {
  throw new Error(`Portfolio request failed (${response.status}) ${url}`)
}

const body = await response.json()
if (!Array.isArray(body.experience) || body.experience.length === 0) {
  throw new Error("Portfolio response is missing experience cards")
}
body.experience.forEach(assertCard)

const source = `import type { Experience } from "@/experience"

export const experience: Experience[] = ${JSON.stringify(body.experience, null, 2)}
`

const outDir = path.join(path.dirname(fileURLToPath(import.meta.url)), "../src/generated")
await mkdir(outDir, { recursive: true })
await writeFile(path.join(outDir, "portfolio.ts"), source)

console.log(`Wrote ${body.experience.length} experience cards from ${url}`)
